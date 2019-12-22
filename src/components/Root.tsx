import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import SignInScreen from './SignInScreen';

import firebase from '../firebase';

const auth = firebase.auth();
const db = firebase.firestore();
const usersRef = db.collection('users');

interface Props {
  routes: (extraProps: any) => JSX.Element;
}
interface State {}

export default class Root extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (!(user && user.displayName)) {
        auth.signOut();
        this.setState({ user: null, uid: null, email: null, displayName: null });
        return;
      }
      const { email, uid, displayName } = user;
      this.setState({ uid, email, displayName });
      toast.success('ログインしました');
    });
  }
  componentDidUpdate(_: any, prevState: any) {
    const { uid } = this.state as any;
    if (uid && !prevState.uid) {
      this.onSetUid();
    }
  }
  onSetUid() {
    this.listenUser();
    this.updateUser();
  }
  listenUser() {
    const { uid } = this.state as any;
    usersRef.doc(uid).onSnapshot(_ => this.setState({ user: _.data() }));
  }
  updateUser() {
    const { uid, email, displayName } = this.state as any;
    usersRef.doc(uid).set({ uid, email, displayName }, { merge: true });
  }
  render() {
    const { user } = this.state as any;
    const { routes } = this.props as any;
    return (
      <div>
        {user ? (
          <BrowserRouter>{routes({ user })}</BrowserRouter>
        ) : (
          <div>
            <SignInScreen></SignInScreen>
          </div>
        )}
        <ToastContainer />
      </div>
    );
  }
}
