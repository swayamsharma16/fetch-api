// src/ItemList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
} from "@mui/material";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="center-container">
      <Typography className="ItemTitle" variant="h4" gutterBottom>
        Item List
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {filteredItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} secondary={item.body} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ItemList;
