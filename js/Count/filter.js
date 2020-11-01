import { DOMelement } from "../util/util.js";

const createWrappedFilter = (filter) => {
  const wrapper = new DOMelement("li").element;
  wrapper.appendChild(filter);
  return wrapper;
};

const filter = () => {
  const allFilter = new DOMelement("a")
    .addAttribute("href", "/#")
    .addClass("all")
    .addClass("selected")
    .addInnerHTML("전체보기").element;
  const activeFilter = new DOMelement("a")
    .addAttribute("href", "#active")
    .addClass("active")
    .addInnerHTML("해야할 일").element;
  const completedFilter = new DOMelement("a")
    .addAttribute("href", "#completed")
    .addClass("completed")
    .addInnerHTML("완료한 일").element;
  const filtersContainer = new DOMelement("ul").addClass("filters").element;

  filtersContainer.append(
    createWrappedFilter(allFilter),
    createWrappedFilter(activeFilter),
    createWrappedFilter(completedFilter)
  );

  return filtersContainer;
};

export default filter;
