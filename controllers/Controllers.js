const Post = require('../models/Posts');

module.exports = {
    getAllThePosts: async (req,res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        }catch (err){
            res.status(400).json({ message:err });
        }
    },
    addPost: async (req,res) => {
        const post = new Post ({
            name: req.body.name,
            description: req.body.description,
            status: 0
        });
        try{
            const savedPost = await post.save();
            res.send("item saved to database");
        }
        catch(err) {
            res.status(400).send("unable to save to database");
        }
    },
    getSpecificPostById: async (req,res)=>{
        try {
            await Post.updateOne({_id:req.params.postId}, 
                {$set:{
                    status:1
                }})
            const post = await Post.findById(req.params.postId);
            res.json(post);
        } catch (err) {
            res.status(400).json({ message: err});
        }
    },
    deletePostById: async (req,res)=>{
        try {
            const removedPost = await Post.remove({ _id: req.params.postId });
            res.json(removedPost);
        } catch (err) {
            res.status(400).json({ message: err});
        }
    } 
}