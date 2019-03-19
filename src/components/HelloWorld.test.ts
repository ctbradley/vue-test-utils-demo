import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

const wrapper = shallowMount(HelloWorld, {});
const stubImport = wrapper.find("vformimport-stub");
const stubRequire = wrapper.find("vformrequire-stub");

describe("<HelloWorld />", () => {
  it("<VForm /> - update inputText & formName not working", () => {
    expect(stubImport.attributes("input-text")).toBe("default input text");
    expect(stubImport.attributes("form-name")).toBe("default form name");

    wrapper.setData({
      inputText: "INPUT_TEXT",
      formName: "FORM_NAME"
    });

    expect(stubImport.attributes("input-text")).toBe("INPUT_TEXT");
    expect(stubImport.attributes("form-name")).toBe("FORM_NAME");
  });

  it("<VForm /> - update inputText & formName working", () => {
    expect(stubRequire.attributes("input-text")).toBe("default input text");
    expect(stubRequire.attributes("form-name")).toBe("default form name");

    wrapper.setData({
      inputText: "INPUT_TEXT",
      formName: "FORM_NAME"
    });

    expect(stubRequire.attributes("input-text")).toBe("INPUT_TEXT");
    expect(stubRequire.attributes("form-name")).toBe("FORM_NAME");
  });
});
