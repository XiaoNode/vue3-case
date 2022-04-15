import { ref,reactive } from "vue";

interface DataProps {
    nowTime: string;
    getNowTime: () => void;
  }
  const timeData: DataProps = reactive({
    nowTime: "00:00:00",
    getNowTime: () => {
      const now = new Date();
      const hour =
        now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
      const minu =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      const sec =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
        timeData.nowTime = hour + ":" + minu + ":" + sec;
      setTimeout(timeData.getNowTime, 1000); //每一秒执行一次这个方法
    },
  });

export { timeData }