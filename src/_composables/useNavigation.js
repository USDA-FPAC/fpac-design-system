
import { useRouter } from 'vue-router';
import { useGoogleAnalytics } from "@/_composables/useGoogleAnalytics";

export function useNavigation() {

  const trackerName = 'Navigate To';
  
  const router = useRouter();
  const { sendToGA } = useGoogleAnalytics();

  const goto = (_path, _target='') => {
    if(_path.includes('http')){
      if(_target=='_blank') window.open(_path, _target);
      else window.location.href = _path;
    } else {
      sendToGA('Page Path', trackerName, _path);
      router.push(_path)
    }
  }

  return {
    goto
  }
}