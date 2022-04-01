import React from "react";
import { TextField, Button, Container } from "@mui/material";
import "./search.scss";

interface IProps {
  value: string;
  onSubmit: (event: any) => void;
  onChange: (event: any) => void;
}

export const SearchPanel = (props: IProps) => {
  const { onSubmit, onChange, value } = props;

  return (
    <section className="search-panel">
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="search-panel__wrapper">
            <div className="search-panel__input">
              <TextField
                variant="standard"
                label="Find hero"
                fullWidth={true}
                color="secondary"
                size="small"
                onChange={onChange}
                value={value}
                type="text"
              />
            </div>

            <div className="search-panel__wrapper-btn">
              <div className="search-panel__btn-sort">
                <Button variant="contained" size="small">
                  sort by
                </Button>
              </div>

              <div className="search-panel__btn-search">
                <Button size="small" type="submit" variant="contained">
                  Search btn
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
