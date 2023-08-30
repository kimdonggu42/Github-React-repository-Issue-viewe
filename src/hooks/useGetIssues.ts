import { useState, useRef } from 'react';
import { TOKEN_API } from '../utils/api';
import { Issue } from '../utils/type';

export const useGetIssues = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const page = useRef<number>(1);

  const getIssues = async () => {
    setLoading(true);
    try {
      const res = await TOKEN_API.get(
        `/repos/facebook/react/issues?state=open&sort=comments&page=${page.current}`,
      );
      setIssues(prevData => [...prevData, ...res.data]);
      page.current += 1;
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return { issues, loading, page, getIssues };
};
