toast("Default toast behavior is untouched, no icon to display");
toast.info("Lorem ipsum dolor"); // same as toast(message, {type: "info"});
toast.error("Lorem ipsum dolor")
toast.success("Lorem ipsum dolor")
toast.warn("Lorem ipsum dolor")
toast.error("Without icon", {
  icon: false
});
toast.success("You can provide any string", {
  icon: "🚀"
});
// custom icons have access to the theme and the toast type
toast.success("And of course a component of your choice", {
  icon: MyIcon
});
toast.success("Even a function, given you return something that can be rendered", {
  icon: ({theme, type}) =>  <img src="url"/>
});
//Disable icons
<ToastContainer icon={false} />