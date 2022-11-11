import { v4 as uuid } from 'uuid';

const bookDetails = (detail) => {
  const { title, author } = detail;
  return {
    id: uuid(),
    title,
    author,
  };
};
export default bookDetails;
