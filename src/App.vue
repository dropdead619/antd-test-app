<template>
  <div id="app">
    <a-layout>
      <a-layout-sider
        :trigger="null"
        collapsible
        :style="{ height: '100vh', maxWidth: '255px', width: '100%' }"
      >
        <div class="logo">
          <img src="./assets/logo.svg" alt="Logo" />
          <span>ERP Isker Akparat</span>
        </div>
        <a-menu
          theme="dark"
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
        >
          <a-menu-item key="1">
            <span>Главная</span>
          </a-menu-item>
          <a-sub-menu key="sub1" mode="inline">
            <span slot="title"><span>СУЗ</span></span>
            <a-menu-item key="3" :style="{ listStyle: 'square' }">
              Формирование КМ
            </a-menu-item>
            <a-menu-item key="4"> Печать </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub1-2">
            <span slot="title"><span>Справочники</span></span>
            <a-menu-item key="5"> Филиалы </a-menu-item>
            <a-menu-item key="6"> Организации Клиентов </a-menu-item>
            <a-menu-item key="7"> ГРЗ/Область </a-menu-item>
            <a-menu-item key="8"> Город </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <Header> Организации Клиентов</Header>
        <a-layout-content>
          <a-table
            :columns="columns"
            :data-source="data"
            :pagination="{
              pageSize: 5,
              showTotal: showTotal,
              total: data.length,
            }"
          ></a-table>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
const columns = [
  {
    title: "ID",
    dataIndex: "key",
    sorter: (a, b) => a.key - b.key,
  },
  {
    title: "БИН/ИИН",
    dataIndex: "binIin",
  },
  {
    title: "Юр.адрес",
    dataIndex: "address",
  },
  {
    title: "E-mail",
    dataIndex: "email",
  },
  {
    title: "Телефон",
    dataIndex: "phone",
  },
];
const data = [
  {
    key: "1",
    binIin: "812312542312",
    address: "г. Нур-Султан, ул. Иманова, 8, ВП-12",
    email: "org@qlt.kz",
    phone: "+7 777 777 77 77",
  },
  {
    key: "2",
    binIin: "812312542312",
    address: "г. Нур-Султан, ул. Иманова, 8, ВП-12",
    email: "org@qlt.kz",
    phone: "+7 777 777 77 77",
  },
  {
    key: "3",
    binIin: "812312542312",
    address: "г. Нур-Султан, ул. Иманова, 8, ВП-12",
    email: "org@qlt.kz",
    phone: "+7 777 777 77 77",
  },
  {
    key: "4",
    binIin: "812312542312",
    address: "г. Нур-Султан, ул. Иманова, 8, ВП-12",
    email: "org@qlt.kz",
    phone: "+7 777 777 77 77",
  },
  {
    key: "5",
    binIin: "812312542312",
    address: "г. Нур-Султан, ул. Иманова, 8, ВП-12",
    email: "org@qlt.kz",
    phone: "+7 777 777 77 77",
  },
  {
    key: "6",
    binIin: "812312542312",
    address: "г. Нур-Султан, ул. Иманова, 8, ВП-12",
    email: "org@qlt.kz",
    phone: "+7 777 777 77 77",
  },
  {
    key: "7",
    binIin: "812312542312",
    address: "г. Нур-Султан, ул. Иманова, 8, ВП-12",
    email: "org@qlt.kz",
    phone: "+7 777 777 77 77",
  },
];

import Header from "@/components/Header";
export default {
  component: {
    Header,
  },
  name: "App",
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    showTotal(total, range) {
      return `${range[1]} объекта из ${total}`;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul.ant-menu {
  text-align: start;
}

.ant-table-thead {
  background: #f0f0f0;
  tr {
    th {
      background: #fafafa !important;
    }
  }
}

.ant-layout-sider-children {
  .logo {
    padding: 24.47px 0px;
    margin: 0 auto;
    img {
      margin-right: 10px;
    }
    span {
      color: #fff;
    }
  }
}
</style>
