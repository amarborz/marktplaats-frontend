import React from 'react'

import { Form } from 'react-bootstrap'

const UploadImage = ({ files, handleFileChange, uploadedUrls }) => {
	// const [files, setFiles] = useState(new Array(10).fill(null))
	// const [uploadedUrls, setUploadedUrls] = useState([])

	// const getBase64 = async (file) => {
	// 	return new Promise((resolve, reject) => {
	// 		const reader = new FileReader()
	// 		reader.readAsDataURL(file)
	// 		reader.onload = () => {
	// 			resolve(reader.result)
	// 		}
	// 		reader.onerror = reject
	// 	})
	// }

	// const sendToAzure = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			`https://uploadimagesmarktplaats.azurewebsites.net/api/uploadImages?code=hQqSGzvawxMmIvzlB1VRt13ArCb25Xr6LlpL-NDpuwu4AzFuCqktBA==`,
	// 			{
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 				},
	// 				body: JSON.stringify(files),
	// 			}
	// 		)
	// 		const body = await response.json()
	// 		setUploadedUrls(body.uploadedImages)
	// 		console.log(body.uploadedImages)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// const handleFileChange = async (event, index) => {
	// 	const newFiles = [...files]
	// 	newFiles[index] = await getBase64(event.target.files[0])
	// 	setFiles(newFiles)
	// 	console.log(files)
	// }

	return (
		<div>
			<h4 style={{ marginTop: 30 }}>Upload up to 10 images.</h4>
			<p>At least 1 image required.</p>
			{files.map((file, index) => (
				<Form.Group controlId="formFile" className="mb-3" key={index}>
					<Form.Control
						type="file"
						onChange={(event) => handleFileChange(event, index)}
					/>
				</Form.Group>
			))}
			{/* <button onClick={sendToAzure}>Upload All</button> */}
			{uploadedUrls.length > 0 && (
				<div>
					<h3>Uploaded Image URLs:</h3>
					<ul>
						{uploadedUrls.map((url, index) => (
							<li key={index}>
								<a href={url} target="_blank" rel="noopener noreferrer">
									{url}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default UploadImage
