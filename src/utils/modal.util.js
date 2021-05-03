import Modal from "../components/Modal.vue";
import { modalController } from "@ionic/vue";

let currentModal = null;
class ModalUtil {
  async openModal(condition) {
    const modal = await modalController.create({
      showBackdrop: false,
      component: Modal,
      cssClass: "my-custom-class",
      componentProps: {
        title: "Game Paused!",
      },
    });
    if (condition == "present") {
      await modal.present();
      currentModal = modal;
    } else if (condition == "dismiss") {
      if (currentModal) {
        currentModal.dismiss().then(() => {
          currentModal = null;
        });
      }
    }
  }
}

let modalUtil = new ModalUtil();
export default modalUtil;
