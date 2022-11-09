import { useRouter } from 'vue-router';
import { useStore } from "vuex";

export function useSteppedControls() {

  const store = useStore();
  const router = useRouter();
  
  const updateSteppedControls = async (_obj, _path, _err, _callback=null) => {
    
    goto( _path );
    if(_callback) _callback();
    
  }

  const goto = (path, target='') => {
    if(path.includes('http')){
      if(target=='_blank') window.open(path, target);
      else window.location.href = path;
    } else {
      router.push(path)
    }
  }

  return {
    updateSteppedControls
  }
}