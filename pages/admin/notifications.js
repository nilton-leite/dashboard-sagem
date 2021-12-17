/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Table from "components/Table/Table.js";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import api from "../../services/api";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

async function getNotifications(page) {

  try {
    const data = await fetch(`http://localhost:3009/notifications/get?page=${page}&pageLength=10`, {
      method: 'get',
      // mode: 'no-cors',
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTY3NDk4NTdhZTIyMDAyNzU5OGI2OSIsImlhdCI6MTYzOTE0MDcwNX0.CvL_dYIGV-4srYHQAuu3HAqW1GoEmaaE-JQIglQ4q78'
      },
    }).then(response => {
      return response.json();
    }).catch(() => {
      return ('Erro')
    });
    const items = []
    
    data.items[0].data.map(function(item, index) {
      items.push([item.title, item.body, item.dataInsert, item.users.full_name]);
    });
    return { data, items };
  } catch (error) {
    console.log(error)
  }
 
}

function Notifications({notifications, items}) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
 
  const [itens, setItens] = React.useState(items);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(notifications.total);
  const handleChange = async(event, value) => {
    setPage(value);
    const notify = await getNotifications(value);
    setItens(notify.items)
    
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="rose">
            <h4 className={classes.cardTitleWhite}>
              Notificações enviadas
            </h4>
            <p className={classes.cardCategoryWhite}>
              Verifique todas as notificações que seu APP enviou
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="rose"
              tableHead={["Título", "Mensagem", "Enviado em", "Enviado para"]}
              tableData={itens}

            />
            <Stack spacing={2}>
              <Pagination count={total} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );

 
}



export async function getServerSideProps(context) {
  const notifications = await getNotifications(1);
  
  return {
    props: { notifications: notifications.data, items: notifications.items }, // will be passed to the page component as props
  }
}

Notifications.layout = Admin;

export default Notifications;
