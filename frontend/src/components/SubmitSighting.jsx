import React from 'react';
import { useNavigate } from 'react-router-dom';

// 🛠️ Refactor: Config schema array to decouple structural data from JSX markup
const formFields = [
  { label: 'Date *', type: 'date', required: true, gridGroup: 'time-date' },
  { label: 'Time *', type: 'time', required: true, gridGroup: 'time-date' },
  { label: 'Location *', type: 'text', required: true, placeholder: 'Place name or address (e.g. Kern River Parkway)', fullWidth: true },
  { label: 'Latitude (Optional)', type: 'text', placeholder: '35.3733', gridGroup: 'coordinates' },
  { label: 'Longitude (Optional)', type: 'text', placeholder: '-119.0187', gridGroup: 'coordinates' },
  { label: 'Number of Foxes Observed *', type: 'number', min: '1', defaultValue: '1', required: true, fullWidth: true }
];

export default function SubmitSighting() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prototype Submission Triggered! Routing directly to listing view.");
    navigate('/sightings');
  };

  // Helper filter to cleanly group grid layouts together in the UI
  const renderFieldsByGroup = (groupKey) => 
    formFields
      .filter(field => field.gridGroup === groupKey)
      .map((field, idx) => (
        <div key={idx}>
          <label>{field.label}</label>
          <input 
            type={field.type} 
            required={field.required} 
            placeholder={field.placeholder} 
            min={field.min} 
            defaultValue={field.defaultValue} 
          />
        </div>
      ));

  return (
    <div style={{maxWidth: '768px', margin: '0 auto'}}>
      <p style={{cursor: 'pointer', marginBottom: '16px'}} onClick={() => navigate('/')}>← Back to Dashboard</p>
      
      <div className="bg-white">
        <h2>Report a Sighting</h2>
        <form onSubmit={handleSubmit}>
          
          {/* Render Date and Time grid layout */}
          <div className="form-grid">
            {renderFieldsByGroup('time-date')}
          </div>

          {/* Render standalone Location layout field */}
          {formFields.filter(f => f.fullWidth && f.type === 'text').map((field, idx) => (
            <div key={idx} style={{marginBottom: '16px'}}>
              <label>{field.label}</label>
              <input type={field.type} required={field.required} placeholder={field.placeholder} />
            </div>
          ))}

          {/* Render Coordinate grid layout */}
          <div className="form-grid">
            {renderFieldsByGroup('coordinates')}
          </div>

          {/* Render standalone Count numeric field */}
          {formFields.filter(f => f.fullWidth && f.type === 'number').map((field, idx) => (
            <div key={idx} style={{marginBottom: '16px'}}>
              <label>{field.label}</label>
              <input type={field.type} min={field.min} defaultValue={field.defaultValue} required={field.required} />
            </div>
          ))}

          <div style={{marginBottom: '24px'}}>
            <label>Photo (Optional)</label>
            <div className="placeholder-box" style={{padding: '16px'}}>Click to upload files (Mock Framework)</div>
          </div>
          
          <button type="submit" style={{width: '100%'}}>Submit Record</button>
        </form>
      </div>
    </div>
  );
}
