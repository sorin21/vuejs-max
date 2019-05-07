<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-success" v-if="show" key="info">This is some success</div>
          <div class="alert alert-warning" v-else key="warning">This is some warning</div>
        </transition>
        <hr>
        <div class="btn btn-primary" @click="load = !load">Load / Remove Element</div>
        <br>
        <br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
        </transition>
        <hr>
        <br>
        <button
          class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
        >Toogle components</button>
        <br>
        <br>
        <transition name="slide" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <br>
        <br>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br>
        <br>
        <ul class="list-group">
          <transition-group name="slide" mode="out-in">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              @click="removeItem(index)"
              style="cursor: pointer"
            >{{ number }}</li>
          </transition-group>
        </ul>
        <br>
        <br>
        <hr>
        <!-- listen to asnwer or confirmed emit events -->
        <transition name="flip" mode="out-in">
          <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
        </transition>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert";
import SuccessAlert from "./SuccessAlert";
import Question from "./components/Question.vue";
import Answer from "./components/Answer.vue";

export default {
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: "fade",
      elementWidth: 100,
      // default selected component
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3, 4, 5],
      mode: "app-question"
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      // set initial state
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");

      let round = 1;
      // 20 miliseconds
      const interval = setInterval(() => {
        // we add to the current with a new width
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        // exit condition
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCanceled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      // 20 miliseconds
      const interval = setInterval(() => {
        // decreeese the current with, for elementWidth, that will always be 100px
        // so we have to set it to 300px in beforeLeave()
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        // exit condition
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    addItem() {
      const position = Math.floor(Math.random() * this.numbers.length);
      // add a new nr from the last position, zero after, and new number
      this.numbers.splice(position, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = "app-answer";
      } else {
        this.mode = "app-question";
        alert("Wrong, try again!");
      }
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert,
    appQuestion: Question,
    appAnswer: Answer
  }
};
</script>

<style>
.fade-enter {
  /* will be removed after 1 fraame */
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s ease-out;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
  opacity: 0;
  /* no need this because we set up the starting in keyframes */
  /* transform: translateY(20px); */
}
/* forwards = stays in the position, doesn't come back */
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 0.3s ease-in-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

/* .flip-enter {
  transform: rotateY(0deg);
} */
.flip-enter-active {
  /* forwards to stay in the final place and not come back to initial state */
  animation: flip-in 0.5s ease-out forwards;
}
/* .flip-leave {
  transform: rotateY(0deg);
} */
.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
/* this is the second component, starts from where the 1st stoped */
@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>
