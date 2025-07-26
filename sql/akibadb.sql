--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: categorie; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.categorie AS ENUM (
    'TOUS',
    'ANALYSES_TENDANCES',
    'EVENEMENTS',
    'ETUDES'
);


ALTER TYPE public.categorie OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: actualites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actualites (
    image character varying,
    titre character varying NOT NULL,
    description character varying NOT NULL,
    categorie public.categorie NOT NULL,
    id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE public.actualites OWNER TO postgres;

--
-- Name: actualitesourcelink; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actualitesourcelink (
    actualite_id uuid NOT NULL,
    source_id integer NOT NULL
);


ALTER TABLE public.actualitesourcelink OWNER TO postgres;

--
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admins (
    nom character varying NOT NULL,
    password character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    id uuid NOT NULL
);


ALTER TABLE public.admins OWNER TO postgres;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO postgres;

--
-- Name: avantage; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.avantage (
    id integer NOT NULL,
    nom character varying NOT NULL
);


ALTER TABLE public.avantage OWNER TO postgres;

--
-- Name: avantage_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.avantage_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.avantage_id_seq OWNER TO postgres;

--
-- Name: avantage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.avantage_id_seq OWNED BY public.avantage.id;


--
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacts (
    nom character varying NOT NULL,
    email character varying NOT NULL,
    telephone character varying NOT NULL,
    objet character varying NOT NULL,
    message character varying NOT NULL,
    id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE public.contacts OWNER TO postgres;

--
-- Name: produitavantagelink; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produitavantagelink (
    produit_id uuid NOT NULL,
    avantage_id integer NOT NULL
);


ALTER TABLE public.produitavantagelink OWNER TO postgres;

--
-- Name: produits; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produits (
    image character varying,
    nom character varying NOT NULL,
    accroche character varying NOT NULL,
    description character varying NOT NULL,
    id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE public.produits OWNER TO postgres;

--
-- Name: source; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.source (
    id integer NOT NULL,
    nom character varying NOT NULL
);


ALTER TABLE public.source OWNER TO postgres;

--
-- Name: source_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.source_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.source_id_seq OWNER TO postgres;

--
-- Name: source_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.source_id_seq OWNED BY public.source.id;


--
-- Name: avantage id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.avantage ALTER COLUMN id SET DEFAULT nextval('public.avantage_id_seq'::regclass);


--
-- Name: source id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.source ALTER COLUMN id SET DEFAULT nextval('public.source_id_seq'::regclass);


--
-- Data for Name: actualites; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actualites (image, titre, description, categorie, id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: actualitesourcelink; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actualitesourcelink (actualite_id, source_id) FROM stdin;
\.


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admins (nom, password, created_at, updated_at, id) FROM stdin;
dsfd	$2b$12$nwu2rzV8ND.wNNe.M1VHX.Qr.r1qNByan4/9tualswQ/YY/cMXs4u	2025-06-11 13:25:05.905664	2025-06-11 13:25:05.90568	6a4da309-2efe-4416-af25-8606518863b0
Lol	$2b$12$JLVVO61xbfMVyr0A1e.1De7vbxDt/fVJf5USkDkS7n28wwdFUfDt6	2025-06-11 20:57:38.03087	2025-06-11 20:57:38.030886	935aa1ce-72e1-4486-9d7a-2af150f2b46c
\.


--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alembic_version (version_num) FROM stdin;
125a3ba5f051
\.


--
-- Data for Name: avantage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.avantage (id, nom) FROM stdin;
19	Fraîcheur garantie : Récolté à maturité optimale et acheminé rapidement.
20	Qualité supérieure : Sélection rigoureuse pour des ananas sans défaut.
21	Source de bien-être : Riche en vitamines C et bromélaïne.
22	Engagement local : Soutien à l'agriculture locale de Bonoua et Samo.
23	Diversité des produits : Entières, chair fraîche, eau, produits dérivés.
24	Goût authentique : Noix gorgées de soleil au goût riche.
25	Bienfaits naturels : Hydratation, fibres, bonnes graisses.
26	Approvisionnement fiable : Régulier, pour particuliers et pros.
27	Variété premium : Kent, pour une qualité gustative exceptionnelle.
28	Maturation optimale : Récolte à point pour texture fondante.
29	Riche en nutriments : Vitamines A, C et antioxydants.
30	Partenariat local : Coopératives de Ferkéssédougou, Sinématiali, Wolo.
31	Fraîcheur et qualité : Racines fermes, cultivées avec soin.
32	Polyvalence d'utilisation : Cuisine, thés, infusions, pâtisseries.
33	Bienfaits santé : Anti-inflammatoires, digestifs, stimulants.
34	Conditionnement adapté : Options variées selon les besoins.
35	Sélection rigoureuse : Noix entières, sans brisures.
36	Goût frais et authentique : Conservation optimale.
37	Source de nutriments : Protéines, bons gras, antioxydants.
38	Options variées : Brutes, grillées, salées, aromatisées.
39	Partenariat local : Coopératives de Kouto (Nord CI).
40	Qualité pure : Extraction traditionnelle, sans additifs.
41	Multiples bienfaits : Peau, cheveux, hydratation profonde.
42	Soutien aux femmes : Coopératives de Korhogo & Ferkéssédougou.
43	Différentes présentations : Brut, raffiné, légèrement parfumé.
44	hhjkjhj
45	n,hjhj
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacts (nom, email, telephone, objet, message, id, created_at, updated_at) FROM stdin;
N'CHO Sem Ezechiel Isaac	ezechielncho225@gmail.com	0585456593	Commande de produit : Noix de Coco	Another test	d21898a8-1a3a-4a66-a55d-bbe105b1ccbf	2025-05-16 12:23:51.692424	2025-05-16 12:23:51.692424
N'CHO Sem Ezechiel Isaac	ezechielncho225@gmail.com	0585456593	Commande de produit : Noix de Coco	Je teste	4e2a3540-a60c-475b-8c66-441e8e2de617	2025-05-16 12:23:51.692424	2025-05-16 12:23:51.692424
N'CHO Sem Ezechiel Isaac	ezechielncho225@gmail.com	0585456593	dsfd	fdf	29bc1e84-5561-4431-82af-c8935fe96653	2025-05-16 12:23:51.692424	2025-05-16 12:23:51.692424
Alpha	alpha25@gmail.com	0145123252	Commande de produit : Noix de Coco	sdqffdsfdfdsfd	edda3c77-df96-439b-8d6b-bd05619ae7f6	2025-05-19 14:47:57.304379	2025-05-19 14:47:57.304383
\.


--
-- Data for Name: produitavantagelink; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produitavantagelink (produit_id, avantage_id) FROM stdin;
64d89f79-2497-4ea3-8e20-0a337c7127e1	22
64d89f79-2497-4ea3-8e20-0a337c7127e1	19
64d89f79-2497-4ea3-8e20-0a337c7127e1	20
64d89f79-2497-4ea3-8e20-0a337c7127e1	21
17e2d5a0-0dc9-49fc-8b6f-db814cbbe1da	24
17e2d5a0-0dc9-49fc-8b6f-db814cbbe1da	26
17e2d5a0-0dc9-49fc-8b6f-db814cbbe1da	23
17e2d5a0-0dc9-49fc-8b6f-db814cbbe1da	25
ccf99f47-60b5-45b1-8cff-92e0fc0fe391	27
ccf99f47-60b5-45b1-8cff-92e0fc0fe391	30
ccf99f47-60b5-45b1-8cff-92e0fc0fe391	29
ccf99f47-60b5-45b1-8cff-92e0fc0fe391	28
8444682c-45b6-4404-9203-df873b44c5e1	31
8444682c-45b6-4404-9203-df873b44c5e1	32
8444682c-45b6-4404-9203-df873b44c5e1	34
8444682c-45b6-4404-9203-df873b44c5e1	33
a19da30a-b7af-4c8c-a3e0-3ea3f61f471d	35
a19da30a-b7af-4c8c-a3e0-3ea3f61f471d	38
a19da30a-b7af-4c8c-a3e0-3ea3f61f471d	37
a19da30a-b7af-4c8c-a3e0-3ea3f61f471d	36
a19da30a-b7af-4c8c-a3e0-3ea3f61f471d	39
29623a7e-1a7b-4ed3-8717-af6f3ff6266c	41
29623a7e-1a7b-4ed3-8717-af6f3ff6266c	43
29623a7e-1a7b-4ed3-8717-af6f3ff6266c	42
29623a7e-1a7b-4ed3-8717-af6f3ff6266c	40
\.


--
-- Data for Name: produits; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produits (image, nom, accroche, description, id, created_at, updated_at) FROM stdin;
/static/produits/images/2ef6effd-5a40-45f1-b38c-a64d75328d22.jpg	Ananas	L'Éclat Tropical Gorgé de Soleil	Imaginez la douceur ensoleillée des tropiques directement dans votre assiette...	64d89f79-2497-4ea3-8e20-0a337c7127e1	2025-05-19 14:34:53.129197	2025-05-19 14:34:53.129199
/static/produits/images/5943beda-e028-4ee6-897b-00b19a54062c.png	Noix de Coco	Un Trésor Tropical aux Mille Vertus	De sa chair blanche et délicieuse à son eau rafraîchissante...	17e2d5a0-0dc9-49fc-8b6f-db814cbbe1da	2025-05-19 14:39:01.34461	2025-05-19 14:39:01.344613
/static/produits/images/ffb83eeb-9aea-4902-bb4a-fcc5f67ba6b0.jpg	Mangue Kent	L'Élégance Sucrée du Soleil	Réputée pour sa chair onctueuse, douce et sans fibres...	ccf99f47-60b5-45b1-8cff-92e0fc0fe391	2025-05-19 14:40:27.824238	2025-05-19 14:40:27.824241
/static/produits/images/7e7f75c5-2f40-4018-b435-858d5816d1ac.jpg	Gingembre	La Racine Énergisante aux Vertus Millénaires	Saveur piquante, arôme puissant et nombreuses vertus...	8444682c-45b6-4404-9203-df873b44c5e1	2025-05-19 14:41:51.546916	2025-05-19 14:41:51.546919
/static/produits/images/f0c72483-1d85-41e1-aee8-c16e19c58d42.jpg	Noix de Cajou	Un Délice Croquant et Nutritif	Avec sa forme distinctive et sa saveur légèrement sucrée...	a19da30a-b7af-4c8c-a3e0-3ea3f61f471d	2025-05-19 14:43:23.428324	2025-05-19 14:43:23.428327
/static/produits/images/d1566653-5e5a-40ed-9cca-82711456cd88.png	Beurre de Karité	Le Secret Naturel d'une Peau Douce et Protégée	Reconnu depuis des siècles pour ses vertus hydratantes et réparatrices...	29623a7e-1a7b-4ed3-8717-af6f3ff6266c	2025-05-19 14:45:08.591891	2025-05-19 14:45:08.591894
\.


--
-- Data for Name: source; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.source (id, nom) FROM stdin;
\.


--
-- Name: avantage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.avantage_id_seq', 45, true);


--
-- Name: source_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.source_id_seq', 20, true);


--
-- Name: actualites actualites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actualites
    ADD CONSTRAINT actualites_pkey PRIMARY KEY (id);


--
-- Name: actualitesourcelink actualitesourcelink_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actualitesourcelink
    ADD CONSTRAINT actualitesourcelink_pkey PRIMARY KEY (actualite_id, source_id);


--
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: avantage avantage_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.avantage
    ADD CONSTRAINT avantage_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: produitavantagelink produitavantagelink_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produitavantagelink
    ADD CONSTRAINT produitavantagelink_pkey PRIMARY KEY (produit_id, avantage_id);


--
-- Name: produits produits_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produits
    ADD CONSTRAINT produits_pkey PRIMARY KEY (id);


--
-- Name: source source_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.source
    ADD CONSTRAINT source_pkey PRIMARY KEY (id);


--
-- Name: ix_actualites_titre; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_actualites_titre ON public.actualites USING btree (titre);


--
-- Name: ix_admins_nom; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_admins_nom ON public.admins USING btree (nom);


--
-- Name: ix_avantage_nom; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_avantage_nom ON public.avantage USING btree (nom);


--
-- Name: ix_contacts_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_contacts_email ON public.contacts USING btree (email);


--
-- Name: ix_contacts_telephone; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_contacts_telephone ON public.contacts USING btree (telephone);


--
-- Name: ix_produits_nom; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_produits_nom ON public.produits USING btree (nom);


--
-- Name: ix_source_nom; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX ix_source_nom ON public.source USING btree (nom);


--
-- Name: actualitesourcelink actualitesourcelink_actualite_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actualitesourcelink
    ADD CONSTRAINT actualitesourcelink_actualite_id_fkey FOREIGN KEY (actualite_id) REFERENCES public.actualites(id);


--
-- Name: actualitesourcelink actualitesourcelink_source_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actualitesourcelink
    ADD CONSTRAINT actualitesourcelink_source_id_fkey FOREIGN KEY (source_id) REFERENCES public.source(id);


--
-- Name: produitavantagelink produitavantagelink_avantage_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produitavantagelink
    ADD CONSTRAINT produitavantagelink_avantage_id_fkey FOREIGN KEY (avantage_id) REFERENCES public.avantage(id);


--
-- Name: produitavantagelink produitavantagelink_produit_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produitavantagelink
    ADD CONSTRAINT produitavantagelink_produit_id_fkey FOREIGN KEY (produit_id) REFERENCES public.produits(id);


--
-- PostgreSQL database dump complete
--

