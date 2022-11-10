<template  lang="pug">
.task()
  h1() Документы
  input(type="search")
  ul.category-list.mb-4.mt-4
    li(v-for="(object, key) in this.filterArrayParent")

      CategoryParent(:object="object"
        :coords="this.data.coords"
        :hoverElId="this.data.hoverElId"
      @mousedown="this.onMouseDownChild"
      @mouseup="this.onMouseUpChild"
        v-on:mouse-up="this.onMouseUpChild"
        v-on:mouse-down="this.onMouseDownChild")

    li(v-for="(object, key) in this.filterArrayChild")

      CategoryChild(:object="object"
        @mousedown="this.onMouseDownChild"
        @mouseup="this.onMouseUpChild"
        :class="(object.isMove ? 'move' : '') + (this.data.hoverElId === object.id ? ' hover' : '')"
        :data-id="object.id"
        :style=`{top: object.isMove ? this.data.coords.y - 20 + 'px' : 0,
            left: object.isMove ? this.data.coords.x - 80 + 'px' : 0}`)

</template>

<script>
import Icon from "../components/Icon/Icon.vue";

import CategoryParent from "../components/Category/CategoryParent.vue";
import CategoryChild from "../components/Category/CategoryChild.vue";

export default {
  components: {
    Icon, CategoryParent, CategoryChild
  },
  data () {
    return {
      data: {
        coords: {},
        isMove: false,
      },
      init: [
        {
          name: '',
          title: 'Мед. книжка',
          id: 1,
          left: 0,
          top: 0,
          status: 'child',
        },
        {
          name: '',
          title: 'Обязательные для всех',
          status: 'parent',
          id: 6,
          children: [
            {
              name: '',
              title: 'Паспорт',
              status: 'child',
              id: 7,
            },
            {
              name: '',
              title: 'ИНН',
              status: 'child',
              id: 8,
            }
          ]
        },
        {
          name: '',
          title: 'Обязательные для трудоустройства',
          status: 'parent',
          id: 5,
          children: [
            {
              name: '',
              title: 'Трудовая книжка',
              status: 'child',
              id: 9,
            },
            {
              name: '',
              title: 'СНИЛС',
              status: 'child',
              id: 10,
            },
            {
              name: '',
              title: 'Военный билет',
              status: 'child',
              id: 11,
            }
          ]
        },
        {
          name: '',
          title: 'Специальные',
          status: 'parent',
          id: 4,
          children: [
            {
              name: '',
              title: 'Документ о квалификации',
              status: 'child',
              id: 12,
            },
            {
              name: '',
              title: 'Документ переподготовки',
              status: 'child',
              id: 13,
            }
          ]
        },
        {
          name: '',
          title: 'Тестовое задание кандидата',
          id: 2,
          left: 0,
          top: 0,
          status: 'child',
        },
        {
          name: '',
          title: 'Трудовой договор',
          id: 3,
          left: 0,
          top: 0,
          status: 'child',
        },

      ]
    }
  },
  computed: {
    filterArrayParent() {
      return this.init.filter(e => e.status === 'parent')
    },
    filterArrayChild() {
      return this.init.filter(e => e.status !== 'parent')
    }
  },
  methods: {
    setElementMove(id) {
      for (let i = 0; i < this.init.length; i++) {
        if (this.init[i].id === id) {
          this.init[i].isMove = true;
        } else {
          this.init[i].isMove = false
        }
        if (typeof this.init[i].children !== 'undefined') {
          for (let j = 0; j < this.init[i].children.length; j++) {
            if (this.init[i].children[j].id === id) {
              this.init[i].children[j].isMove = true;
            } else {
              this.init[i].children[j].isMove = false
            }
          }
        }
      }
    },
    onMouseDownChild(e) {
      if (typeof e === 'undefined') return;
      const parentChild = e.target.closest('.category-child');

      if (!parentChild) return;
      const parentChildId = Number(parentChild.dataset.id);
      this.data.isMove = true;
      this.data.moveElementId = parentChildId;
      this.setElementMove(parentChildId);
    },
    onMouseUpChild(e) {
      if (typeof e === 'undefined') return;
      this.data.isMove = false;
      const id = e.target.closest('.category-child').dataset.id;
      this.setElementMove(-1);
      console.log(e.target.closest('.category-child'));
      this.changeArray(Number(id))
    },
    executeElement(id) {
      let result = false;
      for (let i = 0; i < this.init.length; i++) {
        if (this.init[i].id === id) {
          result = this.init[i];
          this.init.splice(i, 1)
          return result
        }
        if (typeof this.init[i].children !== 'undefined') {
          for (let j = 0; j < this.init[i].children.length; j++) {
            if (this.init[i].children[j].id === id) {
              result = this.init[i].children[j];
              this.init[i].children.splice(j, 1)
              return result
            }
          }
        }
      }
    },
    includeElement(el) {
      for (let i = 0; i < this.init.length; i++) {
        if (this.init[i].id === this.data.hoverElId) {
            this.init.splice(i+1, 0, el)
        }
        if (typeof this.init[i].children !== 'undefined') {
          for (let j = 0; j < this.init[i].children.length; j++) {
            if (this.init[i].children[j].id === this.data.hoverElId) {
              this.init[i].children.splice(j+1, 0, el)
            }
          }
        }
      }
    },
    changeArray(id) {
      const changeElement = this.executeElement(this.data.moveElementId);
      console.log(changeElement);
      this.includeElement(changeElement);
    }
  },
  mounted () {

    this.$nextTick(function () {

      document.addEventListener('mousemove', (e) => {
        if (!this.data.isMove) {
          this.data.hoverElId = -1
          return
        }
        this.data.coords.y = e.y;
        this.data.coords.x = e.x;
        this.data.hoverElId = Number(e.target.closest('.category-child').dataset.id);
        console.log(this.data.hoverElId);
      })

    })
  },
}
</script>

<style lang="scss">
.task {

}
button {
  width: 300px;
  height: 100px;
}
</style>
