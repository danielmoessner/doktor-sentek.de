import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DynamicInput, { InputProps } from './DynamicInput';

function Component({ fields, dataProtectionText, name, successText, successHeading }) {
  const [enabled, setEnabled] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const form = useRef(null);

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-undef
      const formData = new FormData(form.current);
      // eslint-disable-next-line no-undef
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => setFormSent(true))
        .catch((error) => {
          // eslint-disable-next-line
          console.log('Form error', error)
          // eslint-disable-next-line
          alert('Fehler. Bitte versuchen Sie es erneut.');
        });
    };
    // eslint-disable-next-line no-undef
    document.querySelector(`#${name}`).addEventListener('submit', handleSubmit);
  }, []);

  return (
    <div className="max-w-xl">
      <div className={`${formSent ? 'block' : 'hidden'}`}>
        <div className="pt-24">
          <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {successHeading}
          </div>
          <p className="mt-2 prose">{successText}</p>
        </div>
      </div>

      <div className={`${formSent ? 'hidden' : 'block'}`}>
        <form
          name={name}
          id={name}
          ref={form}
          data-netlify="true"
          className={` grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8`}
        >
          <input type="hidden" name="form-name" value={name} />

          {fields.map((field) => (
            // eslint-disable-next-line
          <DynamicInput key={field.name} {...field} />
          ))}

          <div className="sm:col-span-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setEnabled(!enabled)}
                  className={`${
                    enabled ? 'bg-gray-600' : 'bg-gray-200'
                  } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
                  role="switch"
                  aria-checked="false"
                >
                  <input
                    className="transform sr-only translate-x-3 translate-y-2"
                    type="checkbox"
                    checked={enabled}
                    onChange={() => {}}
                    required
                    tabIndex="-1"
                  />
                  <span
                    aria-hidden="true"
                    className={`${
                      enabled ? 'translate-x-5' : 'translate-x-0'
                    } inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                  />
                </button>
              </div>
              <div className="ml-3">
                <p className="text-base text-gray-500">{dataProtectionText}</p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-700 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 px-6 py-3"
            >
              Absenden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Component.defaultProps = {
  name: 'standardformular',
  dataProtectionText:
    'Ich stimme zu, dass meine Daten zum Bearbeiten dieser Anfrage vorrübergehend gespeichert werden.',
  successHeading: 'Vielen Dank',
  successText: 'Vielen Dank für Ihre Anfrage wir weden uns schnellstmöglich bei Ihnen melden.',
};

Component.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape(InputProps)).isRequired,
  dataProtectionText: PropTypes.string,
  name: PropTypes.string,
  successHeading: PropTypes.string,
  successText: PropTypes.string,
};

export default Component;
