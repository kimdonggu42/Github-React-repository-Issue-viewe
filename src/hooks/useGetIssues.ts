import { useState, useRef } from 'react';
import { TOKEN_API } from '../utils/api';

export const useGetIssues = () => {
  const [issues, setIssues] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(issues);

  const page = useRef<number>(1);

  const getIssues = async () => {
    setLoading(true);
    try {
      const res = await TOKEN_API.get(
        `/repos/facebook/react/issues?state=open&sort=comments&page=${page.current}`,
      );
      setIssues((prevData: any) => [...prevData, ...res.data]);
      page.current += 1;
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return { issues, loading, page, getIssues };
};
