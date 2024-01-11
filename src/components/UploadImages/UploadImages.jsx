import React from 'react'

import { Form } from 'react-bootstrap'

const UploadImages = ({ files, handleFileChange }) => {
	return (
		<div>
			<h4 style={{ marginTop: 30 }}>Upload up to 10 images.</h4>
			<p>At least 1 image required.</p>
			{files.map((file, index) => (
				<Form.Group controlId="formFile" className="mb-3" key={index}>
					<Form.Control
						type="text"
						onChange={(event) => handleFileChange(event, index)}
					/>
				</Form.Group>
			))}
		</div>
	)
}

export default UploadImages
