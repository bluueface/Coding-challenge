CREATE TABLE stock (
    stock_id       BIGINT    NOT NULL AUTO_INCREMENT,
    quantity       INT    NOT NULL,
    PRIMARY KEY (stock_id)
);

ALTER TABLE product
    ADD  stock_id  BIGINT    NOT NULL;

ALTER TABLE product
    ADD FOREIGN KEY (stock_id) REFERENCES stock(stock_id);
