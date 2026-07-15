import Tweet from '../models/tweet.js';

class TweetRepository {

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id)
                .populate({
                    path: 'comments',
                    populate: {
                        path: 'comments'
                    }
                })
                .lean();

            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async getAll(offset = 0, limit = 10) {
        try {
            const tweets = await Tweet.find()
                .skip(offset)
                .limit(limit);

            return tweets;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(id, data, {
                new: true
            });

            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({
                path: 'likes'
            });

            return tweet;
        } catch (error) {
            throw error;
        }
    }
}

export default TweetRepository;