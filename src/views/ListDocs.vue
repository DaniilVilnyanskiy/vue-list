<template  lang="pug">
.list(:class="(this.data.cursorGrab === true) ? 'cursor-grab' : ''")
  .list__head
    h1 Документы
  .row
    .col.col-lg-6
      Input(@event-input="this.eventInput")
  ul.category-list.mb-4.mt-4
    li.category-list__parent(:class="object.isActiveAcc ? 'active-accordion' : ''" v-for="(object, key) in this.filterArrayParent")

      CategoryParent(:object="object"
        :coords="this.data.coords"
        :hoverElId="this.data.hoverElId"
        @mousedown="this.onMouseDown"
        @click-btn-acc="this.initAccordion(object)"
        @mouse-down="this.onMouseDown"
        @touchstart="this.onMouseDown"
        :class="(object.isMove ? 'opacity' : '') + (this.data.hoverElId === object.id ? ' hover' : '')")
      CategoryParent(
        v-if="object.isMove"
        :object="object"
        :coords="this.data.coords"
        :hoverElId="this.data.hoverElId"
        :class="'move'"
        :style=`{top: object.isMove ? this.data.coords.y - 20 + 'px' : 0,
            left: object.isMove ? this.data.coords.x - 80 + 'px' : 0}`)
  ul.category-list.category-extra
    li(class="category-list__child" v-for="(object, key) in this.filterArrayChild")

      CategoryChild(:object="object"
        @mousedown="this.onMouseDown"
        @touchstart="this.onMouseDown"
        :class="(object.isMove ? 'opacity' : '') + (this.data.hoverElId === object.id ? ' hover' : '')"
        :data-id="object.id")
      CategoryChild(
        v-if="object.isMove"
        :object="object"
        @mousedown="this.onMouseDown"
        @touchstart="this.onMouseDown"
        class="move"
        :data-id="object.id"
        :style=`{top: object.isMove ? this.data.coords.y - 20 + 'px' : 0,
            left: object.isMove ? this.data.coords.x - 80 + 'px' : 0}`)
    li.category-list-li_drag-here Можете перетащить сюда элемент из категории

</template>

<script>
import Icon from "../components/Icon/Icon.vue";
import Input from "../components/Input/Input.vue"

import CategoryParent from "../components/Category/CategoryParent.vue";
import CategoryChild from "../components/Category/CategoryChild.vue";

export default {
  components: {
    Icon, CategoryParent, CategoryChild, Input
  },
  data () {
    return {
      data: {
        coords: {},
        isMove: false,
        hoverElId: -1,
        dataParent: '',
      },
      init: [
        {
          name: '',
          title: 'Мед. книжка',
          id: 1,
          status: 'child',
        },
        {
          name: '',
          title: 'Обязательные для всех',
          info: 'Документы, обязательные для всех сотрудников без исключения',
          status: 'parent',
          id: 6,
          marks: [
            'red-pink', 'yellow', 'yellow-shadow'
          ],
          children: [
            {
              name: '',
              title: 'Паспорт',
              info: 'Для всех',
              required: 'Обязательный',
              marks: [
                'light-blue'
              ],
              status: 'child',
              id: 7,
            },
            {
              name: '',
              title: 'ИНН',
              info: 'Для всех',
              required: 'Обязательный',
              status: 'child',
              id: 8,
            }
          ]
        },
        {
          name: '',
          title: 'Обязательные для трудоустройства',
          info: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от гражданства',
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
          info: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
          id: 2,
          status: 'child',
        },
        {
          name: '',
          title: 'Трудовой договор',
          info: '',
          marks: [
            'blue', 'pink'
          ],
          id: 3,
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
      this.init.filter((el) => {
        (el.id === id) ? el.isMove = true : el.isMove = false

        if (typeof el.children !== 'undefined') {
          el.children.filter((child) => {
            (child.id === id) ? child.isMove = true : child.isMove = false
          })
        }
      })
    },
    onMouseDown(e) {
      if (typeof e === 'undefined' || e.target.closest('button')) return;

      this.data.cursorGrab = true;
      let parentChild = e.target.closest('.category-child');

      if (!parentChild) parentChild = e.target.closest('.category-parent');
      if (!parentChild) return;

      parentChild.closest('[data-parentt="true"]') ? this.data.dataParentt = true : this.data.dataParentt = false

      const parentChildId = Number(parentChild.dataset.id);
      this.data.isMove = true;
      this.mouseEvent(e)
      this.data.moveElementId = parentChildId;
      this.setElementMove(parentChildId);
    },
    /**
     * Отпускание мыши
     */
    onMouseUpChild(e) {
      if (typeof e === 'undefined') return;

      this.data.cursorGrab = false;
      this.data.isMove = false;

      this.setElementMove(-1);
      // console.log(this.data.dataParent);
      if (this.data.hoverElId !== -1 && this.data.hoverElId !== this.data.moveElementId && !this.data.dataParent) {
        this.changeArray(this.data.hoverElId)
      }
    },
    executeElement(id) {
      let result = false;
      this.init.filter((el, i) => {
        if (el.id === id) {
          result = el;
          this.init.splice(i, 1)
          return result
        }
        if (typeof el.children !== 'undefined') {
          el.children.filter((child, j) => {
            if (child.id === id) {
              result = child;
              this.init[i].children.splice(j, 1)
              return result
            }
          })
        }
      })
      return result

    },

    /**
     * вставляем элемент
     * @param el - элемент который отпустили
     */
    includeElement(el) {
      if (this.data.hoverElId === -100) {
        this.init.push(el)
        return
      }
      this.init.filter((elem, i) => {
        // elem - элемент над которым отпустили
        // console.log(this.data.hoverElId); // навели
        if (elem.id === this.data.hoverElId) {
          if (elem.status === 'child' ) {
            this.init.splice(i+1, 0, el)
          } else if (el.status === 'parent') {
            this.init.splice(i+1, 0, el)
          } else {
            this.init[i].children.splice(0,0, el)
            console.log('test');
          }
        }
        if (typeof elem.children !== 'undefined') {
          if (el.status !== 'parent') {
            elem.children.filter((child, j) => {
              (child.id === this.data.hoverElId) ? this.init[i].children.splice(j+1, 0, el) : ''
            })
          }
        }
      })
    },
    changeArray(id) {
      const changeElement = this.executeElement(this.data.moveElementId);
      this.includeElement(changeElement);
    },
    initAccordion(obj) {
      if (typeof obj == 'undefined') return
      console.log(obj);
      obj.isActiveAcc !== true ? obj.isActiveAcc = true : delete obj.isActiveAcc;
    },
    mouseEvent(e) {
      if (!this.data.isMove) {
        this.data.hoverElId = -1
        return
      }
      this.data.coords.y = e.y;
      this.data.coords.x = e.x;
      if (e.target.closest('.category-child')) {
        if (this.data.dataParentt !== true) {
          this.data.hoverElId = Number(e.target.closest('.category-child').dataset.id);
        }
      } else if (e.target.closest('.category-parent')) {
        this.data.hoverElId = Number(e.target.closest('.category-parent').dataset.id);
      } else if (e.target.closest('.category-extra')) {
        this.data.hoverElId = -100
      }
      // console.log(this.data.hoverElId);
      // console.log(this.data.dataParent);
    },
    eventInput(e) {
      const inputValue = e.target.value.toLowerCase();
      const strings = document.querySelectorAll('.category-child');
      strings.forEach((string) => {
        const title = string.querySelector('.second-title');
        const str = title.innerHTML.toLowerCase();
        const parent = string.closest('.category');
        if (str.indexOf(inputValue) > -1) {
          string.parentElement.classList.remove('d-none')
          string.parentElement.classList.add('d-block')
          parent?.classList.remove('d-none')
        } else {
          string.parentElement.classList.add('d-none')
          string.parentElement.classList.remove('d-block')

          // console.log(parent);
          if (parent) {
            console.log(parent.querySelectorAll('.category-child-li.d-block'));
            if (parent.querySelectorAll('.category-child-li.d-block').length === 0) {
              parent.classList.add('d-none')
            } else {
              parent.classList.remove('d-none')
            }
          }
        }
      })
    }
  },
  mounted () {
    this.$nextTick(function () {

      this.initAccordion()

      document.addEventListener('mousemove', (e) => {
        this.mouseEvent(e)
      })
      document.addEventListener('touchmove', (e) => {
        this.mouseEvent(e)
      })
      document.addEventListener('mouseup', this.onMouseUpChild)
      document.addEventListener('touchend', this.onMouseUpChild)

    })
  },
}
</script>

<style lang="scss">

.list {
  &__head {
    display: flex;
    margin-bottom: 23px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .category-list {
    &__parent {
      &:not(:last-child) .category-parent {
        border-bottom: none;
      }
      &.active-accordion {
        &:not(:last-child) .category-parent {
          border-bottom: 1px solid $lightgrey;
        }
      }
      &:last-child {
        .category-child:last-child {
          border-bottom: 1px solid $lightgrey;
        }
      }
    }
    &__child {

    }
    &:last-child {
      border: 1px solid $lightgrey;
      .category-list__child:last-child .category-child {
        border-bottom: none;
      }
    }
  }
  .category-extra {
    padding: 5px;
    padding-bottom: 50px;
    background-color: rgba(0, 102, 255, 0.1);
    .category-list__child + .category-list-li_drag-here {
      display: none;
    }
    .category-list-li_drag-here {
      text-align: center;
      height: 100%;
      opacity: .6;
    }
  }
}
button {
  width: 300px;
  height: 100px;
}
</style>
