import Base from './Base';
import axios, { AxiosResponse } from 'axios';
import { GuestToken, Scope } from '../../types';
import AuthCodeGrant from './AuthCodeGrant';

/**
 * Class that wraps all OAuth related endpoints
 */
export default class Auth extends Base {
  /**
   * @param clientId OAuth client ID
   * @param clientSecret OAuth client secret
   * @param redirectUri OAuth redirect URI
   */
  constructor(clientId: number, clientSecret: string, redirectUri: string) {
    super(clientId, clientSecret, redirectUri);
  }

  /**
   * @param scopes An array of scopes
   */
  public authorizationCodeGrant(scopes: Scope[] = ['identify']): AuthCodeGrant {
    return new AuthCodeGrant(this.clientId, this.clientSecret, this.redirectUri, scopes);
  }

  /**
   * Gets a token
   * @returns An API token (with guest permissions)
   */
  public async clientCredentialsGrant(): Promise<GuestToken> {
    let resp: AxiosResponse = await axios.post(
      `${this.oauthUrl}token`,
      {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'client_credentials',
        scope: 'public'
      },
      this.headers
    );

    let token: GuestToken = resp.data;
    return token;
  }

  /**
   * Revokes a token
   * @param accessToken Access toke to revoke
   */
  public async revokeToken(accessToken: string) {
    await axios.delete('https://osu.ppy.sh/api/v2/oauth/tokens/current', {
      headers: {
        ...this.headers.headers,
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
}
