import React from 'react';

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log('target:', e.target);
    console.log('value:', e.target.value);
    console.log('name:', e.target.name);
  };
  const handleButtonClick = (e) => {
    alert('button clicked');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    console.log(e.target.value);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit'>submit</button>
        <div>
          <button type='button' onClick={handleButtonClick}>
            Click Me
          </button>
        </div>
      </form>
    </section>
  );
};

export default EventExamples;
