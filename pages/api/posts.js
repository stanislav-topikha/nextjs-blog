import { getSortedPostsData } from "../../lib/post";

export default function handler(req, res) {
  res.status(200).json(getSortedPostsData());
}