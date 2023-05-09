import { computed } from "vue";
import { useDisplay } from "vuetify";

const useDate = () => {
  const { smAndDown: vuetifyMobile } = useDisplay();

  const getDate = computed(() => {
    return (dateString: string, mobile?: boolean) => {
      const isMobile = mobile === undefined ? vuetifyMobile.value : mobile;
      const date = new Date(dateString);
      return (
        (isMobile ? "" : date.getFullYear() + "/") +
        (date.getMonth() < 9 ? "0" : "") +
        (date.getMonth() + 1) +
        "/" +
        (date.getDate() < 10 ? "0" : "") +
        date.getDate() +
        " " +
        (date.getHours() < 10 ? "0" : "") +
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" : "") +
        date.getMinutes() +
        (isMobile
          ? ""
          : ":" + (date.getSeconds() < 10 ? "0" : "") + date.getSeconds())
      );
    };
  });

  return { getDate };
};

export default useDate;
