import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";

export default async function handle(req, res) {
  // if authenticated connect to mongoDb

  await mongooseConnect();

  const { method } = req;

  if (method === "GET") {
    if (req.query?.id) {
      // fetch a single Blog by id
      const Blogs = await Blog.findById(req.query.id);
      res.json(Blogs);
    } else if (req.query?.tags) {
      // fetch Blog by tags
      const Blogs = await Blog.find({
        tags: req.query.tags,
      });
      res.json(Blogs);
    } else if (req.query?.blogcategory) {
      // fetch Blog by category
      const Blogs = await Blog.find({
        blogcategory: req.query.blogcategory,
      });
      res.json(Blogs);
    } else if (req.query?.slug) {
      // fetch Blog by slug
      const Blogs = await Blog.find({ slug: req.query.slug });
      res.json(Blogs.reverse());
    } else {
      // fetch all Blogs
      const Blogs = await Blog.find();
      res.json(Blogs.reverse());
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
