import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import styled from 'react-emotion';
import theme from '../utils/theme';

import { Wrap, HeaderContainer, Header, LineBreak } from '../components/global';

const Label = styled.label`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.typography.ui};
  font-size: ${p => p.theme.size(0.75)};
  line-height: ${p => p.theme.sizeLH(0.75)};
  display: block;
  text-transform: uppercase;
  width: 100%;
`;

const Input = styled.input`
  color: ${p => p.theme.colors.darkgray};
  font-family: ${p => p.theme.typography.copy};
  font-size: ${p => p.theme.size(1)};
  line-height: ${p => p.theme.sizeLH(1)};
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid ${p => p.theme.colors.darkgray};
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const TextArea = styled.textarea`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.typography.copy};
  font-size: ${p => p.theme.size(1)};
  line-height: ${p => p.theme.sizeLH(1)};
  display: block;
  width: 100%;
  height: 175px;
  outline: none;
  padding: 10px;
  border: 1px solid ${p => p.theme.colors.black};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Button = styled.button`
  color: ${p => p.theme.colors.orange};
  font-family: ${p => p.theme.typography.ui};
  font-size: ${p => p.theme.size(1.25)};
  line-height: ${p => p.theme.sizeLH(1.25)};
  padding: 10px;
  background: ${p => p.theme.colors.darkgray};
  text-transform: uppercase;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  outline: 0;
  border: 0;
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Contact extends Component {
  state = { disabled: false };

  _handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    this.setState({ disabled: true });
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Wrap>
        <HeaderContainer>
          <Header>Contact</Header>
          <LineBreak />
        </HeaderContainer>
        <form
          name="scottkendallmusic-contact"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this._handleSubmit}
          css={{ width: '500px', maxWidth: '500px' }}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <Input
            type="hidden"
            name="form-name"
            value="scottkendallmusic-contact"
          />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <Input name="bot-field" onChange={this._handleChange} />
            </label>
          </p>
          <p>
            <Label>
              Name:<br />
              <Input type="text" name="name" onChange={this._handleChange} />
            </Label>
          </p>
          <p>
            <Label>
              Email:<br />
              <Input type="email" name="email" onChange={this._handleChange} />
            </Label>
          </p>
          <p>
            <Label>
              Message:<br />
              <TextArea name="message" onChange={this._handleChange} />
            </Label>
          </p>
          <p>
            <Button type="submit" disabled={disabled}>
              Send
            </Button>
          </p>
        </form>
      </Wrap>
    );
  }
}

export default Contact;
