import { ref } from "vue";

const getDeviceType = () =>
  getComputedStyle(document.body).getPropertyValue("--size");

export default class ResponsiveHelper {
  static isDeviceType = (type: "mobile" | "tablet" | "desktop") =>
    this.deviceType.value === type;

  static deviceType = ref(getDeviceType());
}

window.addEventListener(
  "resize",
  () => (ResponsiveHelper.deviceType.value = getDeviceType())
);
window.addEventListener(
  "load",
  () => (ResponsiveHelper.deviceType.value = getDeviceType())
);
