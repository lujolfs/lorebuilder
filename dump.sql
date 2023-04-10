--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

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
-- Name: lineages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lineages (
    id integer NOT NULL,
    name character varying NOT NULL,
    "maxAge" integer NOT NULL,
    "adultAge" integer NOT NULL,
    "isPlayable" boolean DEFAULT false,
    description text
);


--
-- Name: lineages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lineages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lineages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lineages_id_seq OWNED BY public.lineages.id;


--
-- Name: lineages id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lineages ALTER COLUMN id SET DEFAULT nextval('public.lineages_id_seq'::regclass);


--
-- Data for Name: lineages; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.lineages VALUES (1, 'Anões', 200, 25, true, 'A raça mais populosa de [mundo]. São conhecidos por seus trabalhos com ferro e pedras.');
INSERT INTO public.lineages VALUES (2, 'Orcs', 90, 16, true, 'A raça mais populosa e legalista de [mundo]. São conhecidos por seus organizados assentamentos e por seu sistema jurídico complexo.');
INSERT INTO public.lineages VALUES (3, 'Testou!u!u', 9520, 550, false, 'Linhagem para teste!!!.');


--
-- Name: lineages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.lineages_id_seq', 4, true);


--
-- Name: lineages lineages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lineages
    ADD CONSTRAINT lineages_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

