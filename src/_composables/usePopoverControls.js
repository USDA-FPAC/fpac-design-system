
export function usePopoverControls() {

  const showPopover = (id) => {
    document.getElementById(id).setAttribute('aria-hidden', 'false');
    document.getElementById(id).classList.add('fds-popover--visible');
  }

  const hidePopover = (id) => {
    //let popover = document.getElementById(id)
    document.getElementById(id).setAttribute('aria-hidden', 'true');
    document.getElementById(id).classList.remove('fds-popover--visible');
  }
  return {
    showPopover,
    hidePopover
  }
}