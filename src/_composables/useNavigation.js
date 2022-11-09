
import { useRouter } from 'vue-router';

export function useNavigation() {
  
  const router = useRouter();

  const goto = (_path, _target='') => {
    if(_path.includes('http')){
      if(_target=='_blank') window.open(_path, _target);
      else window.location.href = _path;
    } else {
      router.push(_path)
    }
  }

  return {
    goto
  }
}