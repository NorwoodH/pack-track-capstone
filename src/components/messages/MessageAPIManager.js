export const getMessages = () => {
	return fetch(`http://localhost:8088/messages`).then((res) =>
		res.json()
	);
};

export const postNewMessage = (message) => {
	return fetch("http://localhost:8088/messages", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(message),
	});
};

export const deleteMessage = (messageId) => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
    });
};