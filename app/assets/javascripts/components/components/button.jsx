import PureRenderMixin from 'react-addons-pure-render-mixin';

const Button = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    disabled: React.PropTypes.bool
  },

  mixins: [PureRenderMixin],

  handleClick (e) {
    if (!this.props.disabled) {
      this.props.onClick();
    }
  },

  render () {
    return (
      <button className='button' disabled={this.props.disabled} onClick={this.handleClick} style={{ display: 'inline-block', position: 'relative', boxSizing: 'border-box', textAlign: 'center', border: '10px none', color: '#fff', fontSize: '14px', fontWeight: '500', letterSpacing: '0', textTransform: 'uppercase', padding: '0 16px', height: '36px', cursor: 'pointer', lineHeight: '36px', borderRadius: '4px', textDecoration: 'none' }}>
        {this.props.text}
      </button>
    );
  }

});

export default Button;