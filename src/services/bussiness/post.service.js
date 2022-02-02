import Post from "../../models/post";

const PostService = {
  async Add(dto, userId) {
    // associations can be defined here
    const result = await Post.create({
      title: dto?.title,
      slug: dto?.slug,
      summary: dto?.summary,
      content: dto?.content,
      publishedDate: new Date(),
      createdBy: userId,
      updatedBy: userId,
      type: dto.type,
    });
    return result;
  }
};
export default PostService;