import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("<HelloWorld />", () => {
  it("<VForm /> - update inputText & formName", () => {
    const wrapper = shallowMount(HelloWorld, {});

    const stub = wrapper.find("vform-stub");

    expect(stub.attributes("inputtext")).toBe("default input text");

    expect(stub.attributes("form-name")).toBe("default form name");

    wrapper.setData({
      inputText: "YO",
      formName: "LO"
    });

    expect(stub.attributes("inputtext")).toBe("YO");

    expect(stub.attributes("form-name")).toBe("LO");
  });
});
