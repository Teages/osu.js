import { z } from 'zod';
import { searchOptionsSchema } from '../schemas';
import {
  getBeatmapAttributesOptionsSchema,
  getBeatmapOptionsSchema,
  getBeatmapsOptionsSchema,
  getBeatmapScoresOptionSchema,
  lookupBeatmapOptionsSchema
} from '../schemas/beatmaps';
import {
  getDiscussionPostsOptionsSchema,
  getDiscussionsOptionsSchema,
  getDiscussionVotesOptionsSchema
} from '../schemas/beatmapset-discussions';
import {
  getChangelogListingOptionsSchema,
  lookupChangelogBuildOptionsSchema
} from '../schemas/changelog';
import {
  createAnnounceChannelOptionsSchema,
  createPMChannelOptionsSchema,
  createPMOptionsSchema
} from '../schemas/chat';
import { getCommentsOptionsSchema } from '../schemas/comments';
import {
  createTopicOptionsSchema,
  getTopicOptionsSchema,
  replyToTopicOptionsSchema,
  updatePostOptionsSchema,
  updateTopicOptionsSchema
} from '../schemas/forum';
import { getPlaylistScoresOptionsSchema } from '../schemas/multiplayer';
import { getNewsListingOptionsSchema, getNewsPostOptionsSchema } from '../schemas/news';
import { getRankingOptionsSchema } from '../schemas/ranking';
import {
  getSelfOptionsSchema,
  getUserBeatmapsOptionsSchema,
  getUserKudosuOptionsSchema,
  getUserOptionsSchema,
  getUserRecentScoresOptionsSchema,
  getUserScoresOptionsSchema,
  getUsersOptionsSchema,
  getUserRecentActivityOptionsSchema
} from '../schemas/users';

export interface Options {
  query?: Record<string, unknown>;
  body?: Record<string, unknown> | string;
}

export type LookupBeatmapOptions = z.infer<typeof lookupBeatmapOptionsSchema>;
export type GetBeatmapScoresOptions = z.infer<typeof getBeatmapScoresOptionSchema>;
export type GetBeatmapsOptions = z.infer<typeof getBeatmapsOptionsSchema>;
export type GetBeatmapOptions = z.infer<typeof getBeatmapOptionsSchema>;
export type GetBeatmapAttributesOptions = z.infer<typeof getBeatmapAttributesOptionsSchema>;

export type GetDiscussionPostsOptions = z.infer<typeof getDiscussionPostsOptionsSchema>;
export type GetDiscussionVotesOptions = z.infer<typeof getDiscussionVotesOptionsSchema>;
export type GetDiscussionsOptions = z.infer<typeof getDiscussionsOptionsSchema>;

export type GetChangelogListingOptions = z.infer<typeof getChangelogListingOptionsSchema>;
export type LookupChangelogBuildOptions = z.infer<typeof lookupChangelogBuildOptionsSchema>;

export type CreatePMOptions = z.infer<typeof createPMOptionsSchema>;
export type CreatePMChannelOptions = z.infer<typeof createPMChannelOptionsSchema>;
export type CreateAnnounceChannelOptions = z.infer<typeof createAnnounceChannelOptionsSchema>;

export type GetCommentsOptions = z.infer<typeof getCommentsOptionsSchema>;

export type ReplyToTopicOptions = z.infer<typeof replyToTopicOptionsSchema>;
export type CreateTopicOptions = z.infer<typeof createTopicOptionsSchema>;
export type GetTopicOptions = z.infer<typeof getTopicOptionsSchema>;
export type UpdateTopicOptions = z.infer<typeof updateTopicOptionsSchema>;
export type UpdatePostOptions = z.infer<typeof updatePostOptionsSchema>;

export type SearchOptions = z.infer<typeof searchOptionsSchema>;

export type GetPlaylistScoresOptions = z.infer<typeof getPlaylistScoresOptionsSchema>;

export type GetNewsListingOptions = z.infer<typeof getNewsListingOptionsSchema>;
export type GetNewsPostOptions = z.infer<typeof getNewsPostOptionsSchema>;

export type GetRankingOptions = z.infer<typeof getRankingOptionsSchema>;

export type GetSelfOptions = z.infer<typeof getSelfOptionsSchema>;
export type GetUserKodosuOptions = z.infer<typeof getUserKudosuOptionsSchema>;
export type GetUserScoresOptions = z.infer<typeof getUserScoresOptionsSchema>;
export type GetUserRecentScoresOptions = z.infer<typeof getUserRecentScoresOptionsSchema>;
export type GetUserBeatmapsOptions = z.infer<typeof getUserBeatmapsOptionsSchema>;
export type GetUserRecentActivityOptions = z.infer<typeof getUserRecentActivityOptionsSchema>;
export type GetUserOptions = z.infer<typeof getUserOptionsSchema>;
export type GetUsersOptions = z.infer<typeof getUsersOptionsSchema>;
