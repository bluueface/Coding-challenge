CREATE TABLE product
(
    product_id         VARCHAR(16)     NOT NULL,
    name        VARCHAR(125)    NOT NULL,
    description VARCHAR(125),
    price       DECIMAL           NOT NULL,
    created_at  TIMESTAMP     NOT NULL,
    updated_at  TIMESTAMP     NOT NULL,
    PRIMARY KEY (product_id)
);
