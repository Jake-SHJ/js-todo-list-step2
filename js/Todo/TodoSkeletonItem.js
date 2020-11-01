import { DOMelement } from "../util/util.js";

const TodoSkeletonItem = () => {
  const skeletonMask = new DOMelement("div").addClass("skel-mask").element;
  const skeletonMaskContainer = new DOMelement("div").addClass(
    "skel-mask-container"
  ).element;
  const animatedBackground = new DOMelement("div").addClass(
    "animted-background"
  ).element;
  const skeletonItem = new DOMelement("label").addClass("label").element;
  const skeletonItemWrapper = new DOMelement("div").addClass("view").element;
  const skeletonItemContainer = new DOMelement("li").element;

  skeletonItemContainer
    .appendChild(skeletonItemWrapper)
    .appendChild(skeletonItem)
    .appendChild(animatedBackground)
    .appendChild(skeletonMaskContainer)
    .appendChild(skeletonMask);

  return skeletonItemContainer;
};

export default TodoSkeletonItem;
