--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brand; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brand (
    brand_id integer NOT NULL,
    brand character varying(20) NOT NULL,
    country character varying(20),
    description text
);


ALTER TABLE public.brand OWNER TO postgres;

--
-- Name: brand_brand_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brand_brand_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brand_brand_id_seq OWNER TO postgres;

--
-- Name: brand_brand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brand_brand_id_seq OWNED BY public.brand.brand_id;


--
-- Name: keyboards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.keyboards (
    kb_id integer NOT NULL,
    name character varying(30) NOT NULL,
    brand_id integer NOT NULL,
    layout_id integer NOT NULL,
    description text,
    price integer NOT NULL
);


ALTER TABLE public.keyboards OWNER TO postgres;

--
-- Name: keyboards_kb_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.keyboards_kb_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.keyboards_kb_id_seq OWNER TO postgres;

--
-- Name: keyboards_kb_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.keyboards_kb_id_seq OWNED BY public.keyboards.kb_id;


--
-- Name: layouts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts (
    layout_id integer NOT NULL,
    layout character varying(15),
    keycount integer NOT NULL,
    details text NOT NULL
);


ALTER TABLE public.layouts OWNER TO postgres;

--
-- Name: layouts_layout_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_layout_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.layouts_layout_id_seq OWNER TO postgres;

--
-- Name: layouts_layout_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_layout_id_seq OWNED BY public.layouts.layout_id;


--
-- Name: switch; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.switch (
    sw_id integer NOT NULL,
    sw_name text NOT NULL,
    description text NOT NULL,
    price double precision NOT NULL
);


ALTER TABLE public.switch OWNER TO postgres;

--
-- Name: switch_sw_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.switch_sw_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.switch_sw_id_seq OWNER TO postgres;

--
-- Name: switch_sw_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.switch_sw_id_seq OWNED BY public.switch.sw_id;


--
-- Name: brand brand_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brand ALTER COLUMN brand_id SET DEFAULT nextval('public.brand_brand_id_seq'::regclass);


--
-- Name: keyboards kb_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keyboards ALTER COLUMN kb_id SET DEFAULT nextval('public.keyboards_kb_id_seq'::regclass);


--
-- Name: layouts layout_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts ALTER COLUMN layout_id SET DEFAULT nextval('public.layouts_layout_id_seq'::regclass);


--
-- Name: switch sw_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.switch ALTER COLUMN sw_id SET DEFAULT nextval('public.switch_sw_id_seq'::regclass);


--
-- Data for Name: brand; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brand (brand_id, brand, country, description) FROM stdin;
3	Matrix	China	Brand based in China that makes high end level keyboard with various layouts
1	Cannon Keys	USA	ADUHHH
5	KBDFans	USA	Brand starter dari USA yang memberikan opsi starter custom yang bervariasi
\.


--
-- Data for Name: keyboards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.keyboards (kb_id, name, brand_id, layout_id, description, price) FROM stdin;
1	Tofu60	5	1	Keyboard 60% yang relatif murah dari KBDFans	120
7	Satisfaction75	1	5	Keyboard mahal cannonkeys	500
3	Bakeneko 60	1	1	Entry model 60% keyboard from Cannonkeys	160
9	Obliterated75	1	5	Keyboard mid tier dari Cannonkeys dengan layout 75%	123
8	Abel X	3	2	High end TKL keyboard from Matrix	300
\.


--
-- Data for Name: layouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts (layout_id, layout, keycount, details) FROM stdin;
2	TenKeyLess	87	Asal Dulu
5	75%	87	Layout dengan keycount 87 yang memiliki design compact dari tenkeyless
1	60%	65	Layout Compact tanpa ada arrow key
\.


--
-- Data for Name: switch; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.switch (sw_id, sw_name, description, price) FROM stdin;
3	Gateron Yellow KS-3X47	Linear budget switch from gateron with milky top and black bottom with actuation force of 50g and bottoming force of 60g 	0.24
1	Gate INK BLACK	Premium Linear Switch	0.7
10	Gazzew Boba U4T	Switch tactile buatan gazzew yang tactilenya tajam	0.6
15	Cherry MX Brown	Switch tactile dari Cherry yang harganya relatif murah	0.3
\.


--
-- Name: brand_brand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brand_brand_id_seq', 5, true);


--
-- Name: keyboards_kb_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.keyboards_kb_id_seq', 9, true);


--
-- Name: layouts_layout_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_layout_id_seq', 5, true);


--
-- Name: switch_sw_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.switch_sw_id_seq', 17, true);


--
-- Name: brand brand_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_pkey PRIMARY KEY (brand_id);


--
-- Name: keyboards keyboards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keyboards
    ADD CONSTRAINT keyboards_pkey PRIMARY KEY (kb_id);


--
-- Name: layouts layouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts
    ADD CONSTRAINT layouts_pkey PRIMARY KEY (layout_id);


--
-- Name: switch switch_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.switch
    ADD CONSTRAINT switch_pkey PRIMARY KEY (sw_id);


--
-- Name: keyboards fk_brand; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keyboards
    ADD CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES public.brand(brand_id) ON DELETE SET NULL;


--
-- Name: keyboards fk_layouts; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keyboards
    ADD CONSTRAINT fk_layouts FOREIGN KEY (layout_id) REFERENCES public.layouts(layout_id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

