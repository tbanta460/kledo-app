import { useMutation } from "react-query";
import { useAxios, mainUrl } from "../useApi";
const useLoginMutation = (
 
) => {
  const instance = useAxios()
  return useMutation((params) => {
    return instance.post(mainUrl + "/authentication/login", params)
    .then((res) => res.data)
    .catch((error) => error)
  }, {staleTime: Infinity});
};

export default useLoginMutation;