import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Textfield from '@atlaskit/textfield';
import {FaSearch, FaMicrophone, FaVideo, FaTh, FaRegBell,} from "react-icons/fa";
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { AppBar, Toolbar, Button, Popover, Avatar, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, backgroundColor: 'white' },
  menuButton: { marginRight: theme.spacing(2), },
  title: { flexGrow: 1, },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    cursor: 'pointer'
  },
  typography: { padding: theme.spacing(2), },
}));
const Header = (props) => {
  const toggle = () => {
    props.toggle(true)
}
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' :
    undefined; return (
      <div className={classes.root}>
        <div className="root">
        <AppBar position="fixed" backgroundColor="#fff" >
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <div className="root__left">
                  {/* <Textfield width="500" name="search" placeholder="Tìm Kiếm..."></Textfield> */}
                  <input type="text" placeholder="Tìm Kiếm"></input>
                    <button><FaSearch /></button>
                    <button><FaMicrophone /></button>
                </div>
                <div className="root__right">
                    <button ><FaVideo/></button>
                    <button onClick={toggle}><FaTh /></button>
                    <button><FaRegBell /></button>
                </div>
              </Typography>
              <Avatar className={classes.orange} aria-describedby={id} onClick={handleClick}>H</Avatar>
            </Toolbar>

            <Popover id={id} open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
              transformOrigin={{ vertical: 'top', horizontal: 'right', }} >
              <Typography className={classes.typography}>
                <div>
                  <div >
                    <h3>Huy Vũ Lê</h3>
                    <h5 color="blue">Quản lý tài khoản Google của bạn</h5>
                  </div>
                  <hr />
                  <div >
                    <ul>
                      <li><p>Kênh của bạn</p></li>
                      <li><p>Giao dịch và gói hội viên</p></li>
                      <li><p>youtube studio</p></li>
                      <li><p>Chuyển đổi tài khoản</p></li>
                      <li><p>Đăng xuất</p></li>
                    </ul>
                  </div>
                  <hr />
                  <div >
                    <ul >
                      <li><p>Giao diện:giao diện sáng</p></li>
                      <li><p>Ngôn ngữ: Tiếng việt</p></li>
                      <li><p>Địa điểm: Việt Nam</p></li>
                      <li><p>Cài đặt</p></li>
                      <li><p>Dữ liệu của bạn trong Youtube</p></li>
                      <li><p>Trợ giúp</p></li>
                      <li><p>Gửi phản hồi</p></li>
                      <li><p>Phím tắt</p></li>
                    </ul>
                  </div>
                  <hr />
                  <ul >
                    <li><p>Chế độ hạn chế: Đã tắt</p></li>

                  </ul>
                </div>
              </Typography>
            </Popover>
          </Container>
        </AppBar>
        </div>
      </div >
    );
};
export default Header;