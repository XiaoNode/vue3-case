import { reactive, onMounted, onUnmounted } from "vue";

export default function() {
  const mousePosition = reactive({
    x: 0,
    y: 0,
  });

  const setPotion = (e: MouseEvent) => {
    (mousePosition.x = e.pageX), (mousePosition.y = e.pageY);
  };

  onMounted(() => {
    window.addEventListener("mousemove", (e) => {
      setPotion(e);
    });
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", (e) => {
      setPotion(e);
    });
  });

  return {
    mousePosition
  };
}
