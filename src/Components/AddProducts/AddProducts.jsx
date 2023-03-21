import React, { useState } from "react";
import { db, storage } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `images/${image}`);
    try {
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      console.log(imageUrl);
      const user = await addDoc(collection(db, "products"), {
        name: "naman",
        description: "hii",
        price: 90,
      });
      console.log(user);
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Product description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="file" onChange={(e) => handleImageChange(e)} />
      <button type="submit">Add product</button>
    </form>
  );
};

export default AddProductForm;
