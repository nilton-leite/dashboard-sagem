/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/nextjs-material-dashboard/components/footerStyle.js";

export default function Footer(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/dashboard" className={classes.block}>
                Painel
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/table-list" className={classes.block}>
                Agendamentos
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/notifications" className={classes.block}>
                Notificações
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/user-profile" className={classes.block}>
                Perfil
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://niltonjr.dev.br/"
              target="_blank"
              className={classes.a}
            >
              Nilton Junior
            </a>
            , programando para o seu melhor
          </span>
        </p>
      </div>
    </footer>
  );
}
