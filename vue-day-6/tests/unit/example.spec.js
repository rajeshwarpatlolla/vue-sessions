/* eslint-disable */

import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("should have a data 'name' and the value shoule be 'abc'", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.name).toBe("abc");
  });
  it("should have a computed property 'getName' with the value 'abcxyz'", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.getName).toEqual("abcxyz");
  });
  it("should have a 'getFullName' method with the value 'FN abc LN'", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.getFullName()).toEqual("FN abc LN");
  });

  it("should have a variable 'show' with the value 'false'", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.show).toEqual(false);
    wrapper.vm.changeShow();
    expect(wrapper.vm.show).toEqual(true);
  });

  it("should have button which will inverse the value of 'show'", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.show).toEqual(false);
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.show).toEqual(true);
  });

  it("should have an element with class name 'nameClass'", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find("div.nameClass").text()).toBe("abc");
  });

  it("should have an element which will toggle with the variable 'show'", () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.vm.changeShow();
    expect(wrapper.find("div.toggleClass").text()).toBe("This will toggle");
  });

  it("should have a 'dynamicFunction' which will assign value to 'dynamicVar' variable", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.dynamicVar).toBe("");
    wrapper.vm.dynamicFunction('12345');
    expect(wrapper.vm.dynamicVar).toBe("12345");
  });
});
