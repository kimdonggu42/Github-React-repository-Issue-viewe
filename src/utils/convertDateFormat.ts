export const convertDateFormat = (createdAt: string) => {
  const createdDate = new Date(createdAt);
  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1;
  const day = createdDate.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
