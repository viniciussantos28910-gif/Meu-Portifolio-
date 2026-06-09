
// Logos dos times via Liquipedia — Special:Redirect/file funciona em img tags no browser
const TEAM_LOGOS = {
    // Brasil
    'LOUD':               'https://liquipedia.net/commons/Special:Redirect/file/LOUD_allmode.png',
    'LOS':                'https://liquipedia.net/commons/Special:Redirect/file/Los_Grandes_allmode.png',
    'paiN':               'https://liquipedia.net/commons/Special:Redirect/file/Pain_Gaming_allmode.png',
    'paiN Gaming':        'https://liquipedia.net/commons/Special:Redirect/file/Pain_Gaming_allmode.png',
    'RED':                'https://liquipedia.net/commons/Special:Redirect/file/Red_Canids_allmode.png',
    'RED Academy':        'https://liquipedia.net/commons/Special:Redirect/file/Red_Canids_allmode.png',
    'RED Canids':         'https://liquipedia.net/commons/Special:Redirect/file/Red_Canids_allmode.png',
    'W7M':                'https://liquipedia.net/commons/Special:Redirect/file/W7M_Esports_allmode.png',
    'FURIA':              'https://liquipedia.net/commons/Special:Redirect/file/FURIA_Esports_allmode.png',
    // CS2
    'NaVi':               'https://liquipedia.net/commons/Special:Redirect/file/Natus_Vincere_allmode.png',
    'Natus Vincere':      'https://liquipedia.net/commons/Special:Redirect/file/Natus_Vincere_allmode.png',
    'FaZe':               'https://liquipedia.net/commons/Special:Redirect/file/FaZe_Clan_allmode.png',
    'FaZe Clan':          'https://liquipedia.net/commons/Special:Redirect/file/FaZe_Clan_allmode.png',
    'Vitality':           'https://liquipedia.net/commons/Special:Redirect/file/Team_Vitality_allmode.png',
    'Team Vitality':      'https://liquipedia.net/commons/Special:Redirect/file/Team_Vitality_allmode.png',
    'MOUZ':               'https://liquipedia.net/commons/Special:Redirect/file/MOUZ_allmode.png',
    'Team Spirit':        'https://liquipedia.net/commons/Special:Redirect/file/Team_Spirit_allmode.png',
    'Spirit':             'https://liquipedia.net/commons/Special:Redirect/file/Team_Spirit_allmode.png',
    'BetBoom':            'https://liquipedia.net/commons/Special:Redirect/file/BetBoom_allmode.png',
    // Valorant
    'SEN':                'https://liquipedia.net/commons/Special:Redirect/file/Sentinels_lightmode.png',
    'Sentinels':          'https://liquipedia.net/commons/Special:Redirect/file/Sentinels_lightmode.png',
    'NRG':                'https://liquipedia.net/commons/Special:Redirect/file/NRG_allmode.png',
    'KRU':                'https://liquipedia.net/commons/Special:Redirect/file/KRU_Esports_allmode.png',
    'Leviatán Esports':   'https://liquipedia.net/commons/Special:Redirect/file/Leviatan_allmode.png',
    'Movistar KOI':       'https://liquipedia.net/commons/Special:Redirect/file/Movistar_KOI_allmode.png',
    // LoL
    'T1':                 'https://liquipedia.net/commons/Special:Redirect/file/T1_allmode.png',
    'GEN':                'https://liquipedia.net/commons/Special:Redirect/file/Gen.G_allmode.png',
    'Gen.G':              'https://liquipedia.net/commons/Special:Redirect/file/Gen.G_allmode.png',
    'JDG':                'https://liquipedia.net/commons/Special:Redirect/file/JD_Gaming_allmode.png',
    'BLG':                'https://liquipedia.net/commons/Special:Redirect/file/Bilibili_Gaming_allmode.png',
    'TES':                'https://liquipedia.net/commons/Special:Redirect/file/Top_Esports_allmode.png',
    'WBG':                'https://liquipedia.net/commons/Special:Redirect/file/Weibo_Gaming_allmode.png',
    'HLE':                'https://liquipedia.net/commons/Special:Redirect/file/Hanwha_Life_Esports_allmode.png',
    'KT':                 'https://liquipedia.net/commons/Special:Redirect/file/KT_Rolster_allmode.png',
    'C9':                 'https://liquipedia.net/commons/Special:Redirect/file/Cloud9_allmode.png',
    'TSM':                'https://liquipedia.net/commons/Special:Redirect/file/TSM_allmode.png',
    '100T':               'https://liquipedia.net/commons/Special:Redirect/file/100_Thieves_allmode.png',
    // Dota 2
    'Falcons':            'https://liquipedia.net/commons/Special:Redirect/file/Team_Falcons_allmode.png',
    'Team Falcons':       'https://liquipedia.net/commons/Special:Redirect/file/Team_Falcons_allmode.png',
    'Gaimin Gladiators':  'https://liquipedia.net/commons/Special:Redirect/file/Gaimin_Gladiators_allmode.png',
    'Xtreme Gaming':      'https://liquipedia.net/commons/Special:Redirect/file/Xtreme_Gaming_allmode.png',
    'XG':                 'https://liquipedia.net/commons/Special:Redirect/file/Xtreme_Gaming_allmode.png',
    // Multi-jogo
    'G2':                 'https://liquipedia.net/commons/Special:Redirect/file/G2_Esports_allmode.png',
    'G2 Esports':         'https://liquipedia.net/commons/Special:Redirect/file/G2_Esports_allmode.png',
    'Team Liquid':        'https://liquipedia.net/commons/Special:Redirect/file/Team_Liquid_allmode.png',
    'TL':                 'https://liquipedia.net/commons/Special:Redirect/file/Team_Liquid_allmode.png',
};



function getTeamLogo(teamName) {
    // Prioridade: TEAM_LOGOS manual → Clearbit via domínio → Fallback de Avatar
    if (TEAM_LOGOS[teamName]) return TEAM_LOGOS[teamName];
    // fallback elegante com iniciais em roxo
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(teamName)}&background=2d1b69&color=9333ea&rounded=true&bold=true&size=64`;
}

// Fotos dos jogadores pelo proxy de imagens da Liquipedia
const PLAYER_PHOTOS = {
    'Faker': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Faker_2020_interview.png/300px-Faker_2020_interview.png',
    'm0NESY': 'https://img-cdn.hltv.org/playerbodyshot/19230.png',
    'ZywOo': 'https://img-cdn.hltv.org/playerbodyshot/11893.png',
    'aspas': 'https://images.unsplash.com/photo-1566492031762-cb233db13a0e?w=150&h=150&fit=crop',
    'Yatoro': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&h=150&fit=crop',
    'Heruz': 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop',
    'Trigger': 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop',
    'Rabelo': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=150&h=150&fit=crop',
    'Boal': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&h=150&fit=crop',
    'b1t': 'https://img-cdn.hltv.org/playerbodyshot/18987.png',
    'ropz': 'https://img-cdn.hltv.org/playerbodyshot/11816.png',
    'jL': 'https://img-cdn.hltv.org/playerbodyshot/19206.png',
    'rain': 'https://img-cdn.hltv.org/playerbodyshot/8183.png',
    'iM': 'https://img-cdn.hltv.org/playerbodyshot/14759.png',
    'frozen': 'https://img-cdn.hltv.org/playerbodyshot/9960.png',
    'broky': 'https://img-cdn.hltv.org/playerbodyshot/11211.png',
    'w0nderful': 'https://img-cdn.hltv.org/playerbodyshot/20127.png',
    'donk': 'https://img-cdn.hltv.org/playerbodyshot/21167.png'
};

function getPlayerPhoto(name) {
    // Tentar Liquipedia primeiro; o fallback é um avatar estilizado com iniciais
    if (PLAYER_PHOTOS[name]) return PLAYER_PHOTOS[name];
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1e293b&color=10b981&rounded=true&bold=true&size=64`;
}

const MOCK_DATA = {
    carousel: [
        {
            id: 1, category: 'cs2', tag: 'CS2',
            title: 'CS2: ESL anuncia IEM Beijing 2026 com US$ 1,25 milhão',
        },
        {
            id: 2, category: 'lol', tag: 'League of Legends',
            title: 'EWC 2026: T1 vence Dplus KIA por 3-1 e garante vaga na Copa do Mundo de LoL',
        },
        {
            id: 3, category: 'valorant', tag: 'Valorant',
            title: 'LOUD anuncia nova lineup para temporada 2026',
        },
        {
            id: 4, category: 'dota2', tag: 'Dota 2',
            title: 'The International 2026 bate recorde de premiação com US$ 40 Milhões',
        },
        {
            id: 5, category: 'dota2', tag: 'Dota 2',
            title: 'Riyadh Masters 2026: Team Falcons vence Gaimin Gladiators',
        },
        {
            id: 6, category: 'dota2', tag: 'Dota 2',
            title: 'Atualização do Dota 2 traz novo herói e mudanças drásticas no meta',
        },
        {
            id: 7, category: 'r6', tag: 'Rainbow Six Siege',
            title: 'Six Invitational 2026: Grupos são sorteados e brasileiros caem no "grupo da morte"',
        },
        {
            id: 8, category: 'r6', tag: 'Rainbow Six Siege',
            title: 'W7M Esports conquista o bicampeonato mundial de R6 no Brasil',
        },
        {
            id: 9, category: 'r6', tag: 'Rainbow Six Siege',
            title: 'Liquid anuncia nova lineup para a temporada de R6 em 2026',
        }
    ],
    news: [
        { id: 1, category: 'lol', tag: 'League of Legends', title: 'LEC 2026: Jovem talento! Naak Nako é eleito MVP da fase regular' },
        { id: 2, category: 'valorant', tag: 'Valorant', title: 'VCT Americas 2026 Stage 2: Playoffs do torneio acontecerão no Brasil' },
        { id: 3, category: 'cs2', tag: 'CS2', title: 'MIBR e FURIA confirmam presença na Blast Premier Fall Final' },
        { id: 4, category: 'dota2', tag: 'Dota 2', title: 'The International 2026 bate recorde de premiação com US$ 40 Milhões', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400' },
        { id: 5, category: 'r6', tag: 'Rainbow Six Siege', title: 'Six Invitational 2026: Grupos são sorteados e brasileiros caem no "grupo da morte"', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400' },
        { id: 6, category: 'lol', tag: 'League of Legends', title: 'CBLOL 2026: paiN Gaming atropela LOUD em clássico e lidera isolada', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400' },
        { id: 7, category: 'dota2', tag: 'Dota 2', title: 'Riyadh Masters 2026: Team Falcons vence Gaimin Gladiators', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400' },
        { id: 8, category: 'dota2', tag: 'Dota 2', title: 'Atualização do Dota 2 traz novo herói e mudanças drásticas no meta', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400' },
        { id: 9, category: 'r6', tag: 'Rainbow Six Siege', title: 'W7M Esports conquista o bicampeonato mundial de R6 no Brasil', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400' },
        { id: 10, category: 'r6', tag: 'Rainbow Six Siege', title: 'Liquid anuncia nova lineup para a temporada de R6 em 2026', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400' },
        { id: 11, category: 'lol', tag: 'League of Legends', title: 'LCK 2026: Faker alcança nova marca histórica de abates na liga sul-coreana' },
        { id: 12, category: 'lol', tag: 'League of Legends', title: 'Novo campeão do LoL tem habilidades vazadas por dataminers' },
        { id: 13, category: 'cs2', tag: 'CS2', title: 'Imperial Esports anuncia contratação de peso para o RMR das Américas' },
        { id: 14, category: 'cs2', tag: 'CS2', title: 'CS2 recebe atualização com melhorias significativas no sub-tick' },
        { id: 15, category: 'valorant', tag: 'Valorant', title: 'Sentinels derrota NRG em partida eletrizante pelo VCT Americas' },
        { id: 16, category: 'valorant', tag: 'Valorant', title: 'Novo mapa revelado: Riot detalha novo cenário com mecânicas inéditas' }
    ],
    agenda: [
        {
            date: 'Segunda-Feira - 25 Maio 2026',
            matches: [
                { league: 'CBLOL Split 1 2026', game: 'LoL', leagueImage: 'https://icon.horse/icon/leagueoflegends.com', stage: 'Lower bracket quarterfinal 1', team1: 'LOUD', team2: 'LOS', time: 'Ao vivo', format: '', isLive: true, winner: 'LOUD' },
                { league: 'IEM Dallas 2026', game: 'CS2', leagueImage: 'https://icon.horse/icon/counter-strike.net', stage: 'Group Stage', team1: 'NaVi', team2: 'FaZe', time: '14:00', format: 'MD3', isLive: false, winner: 'FaZe' },
                { league: 'LEC Spring 2026', game: 'LoL', leagueImage: 'https://icon.horse/icon/leagueoflegends.com', stage: 'Round 1', team1: 'G2', team2: 'Movistar KOI', time: '12:00', format: 'MD5', isLive: false, winner: 'G2' }
            ]
        },
        {
            date: 'Terça-Feira - 26 Maio 2026',
            matches: [
                { league: 'VCT Americas Stage 1', game: 'Valorant', leagueImage: 'https://icon.horse/icon/playvalorant.com', stage: 'Semifinal', team1: 'Leviatán Esports', team2: 'G2', time: '18:00', format: 'MD5', isLive: false, winner: 'Leviatán Esports' },
                { league: 'Riyadh Masters', game: 'Dota 2', leagueImage: 'https://icon.horse/icon/dota2.com', stage: 'Upper Bracket', team1: 'Falcons', team2: 'Gaimin Gladiators', time: '10:00', format: 'MD3', isLive: false, winner: 'Falcons' },
                { league: 'Six Major', game: 'R6', leagueImage: 'src/imagens/r6.png', stage: 'Final', team1: 'W7M', team2: 'Team Liquid', time: '20:00', format: 'MD5', isLive: false, winner: 'W7M' }
            ]
        }
    ],
    campeonatos: [
        {
            section: 'Ao Vivo',
            tournaments: [
                { league: 'CBLOL Split 1 2026', game: 'LoL', leagueImage: 'https://icon.horse/icon/leagueoflegends.com', teams: ['LOUD', 'LOS', 'paiN', 'RED'] },
                { league: 'IEM Dallas 2026', game: 'CS2', leagueImage: 'https://icon.horse/icon/counter-strike.net', teams: ['NaVi', 'FaZe', 'Vitality', 'Spirit'] }
            ]
        },
        {
            section: 'Em andamento',
            tournaments: [
                { league: 'VCT Americas Stage 1 2026', game: 'Valorant', leagueImage: 'https://icon.horse/icon/playvalorant.com', teams: ['LOUD', 'NRG', 'KRU', 'SEN'] },
                { league: 'LPL Split 2 2026', game: 'LoL', leagueImage: 'https://icon.horse/icon/leagueoflegends.com', teams: ['JDG', 'BLG', 'TES', 'WBG'] },
                { league: 'Riyadh Masters', game: 'Dota 2', leagueImage: 'https://icon.horse/icon/dota2.com', teams: ['Falcons', 'Gaimin Gladiators', 'Team Spirit', 'Xtreme Gaming'] }
            ]
        },
        {
            section: 'Próximos',
            tournaments: [
                { league: 'Blast Premier Fall', game: 'CS2', leagueImage: 'https://icon.horse/icon/counter-strike.net', teams: ['Vitality', 'MOUZ', 'NaVi', 'FaZe'] },
                { league: 'The International 2026', game: 'Dota 2', leagueImage: 'https://icon.horse/icon/dota2.com', teams: ['Falcons', 'BetBoom', 'Team Spirit', 'Xtreme Gaming'] }
            ]
        },
        {
            section: 'Finalizados',
            tournaments: [
                { league: 'Six Invitational 2026', game: 'R6', leagueImage: 'src/imagens/r6.png', winner: 'W7M', score: '3-1', teams: ['W7M'] },
                { league: 'Major Copenhagen 2026', game: 'CS2', leagueImage: 'https://icon.horse/icon/counter-strike.net', winner: 'NaVi', score: '2-1', teams: ['NaVi'] }
            ]
        }
    ],
    bolao: [
        {
            date: '25/05, Segunda',
            matches: [
                { id: 1, league: 'CBLOL Split 1 2026', game: 'LoL', leagueImage: 'https://icon.horse/icon/leagueoflegends.com', team1: 'LOUD', team2: 'LOS', time: 'Ao vivo', format: '', isLive: true, winner: 'LOUD' },
                { id: 2, league: 'IEM Dallas 2026', game: 'CS2', leagueImage: 'https://icon.horse/icon/counter-strike.net', team1: 'NaVi', team2: 'FaZe', time: '14:00', format: 'MD3', isLive: false, winner: 'FaZe' }
            ]
        },
        {
            date: '26/05, Terça',
            matches: [
                { id: 3, league: 'VCT Americas', game: 'Valorant', leagueImage: 'https://icon.horse/icon/playvalorant.com', team1: 'Leviatán Esports', team2: 'G2', time: '18:00', format: 'MD5', isLive: false, winner: 'Leviatán Esports' },
                { id: 4, league: 'Riyadh Masters', game: 'Dota 2', leagueImage: 'https://icon.horse/icon/dota2.com', team1: 'Falcons', team2: 'Gaimin Gladiators', time: '10:00', format: 'MD3', isLive: false, winner: 'Falcons' },
                { id: 5, league: 'Six Major', game: 'R6', leagueImage: 'src/imagens/r6.png', team1: 'W7M', team2: 'Team Liquid', time: '20:00', format: 'MD5', isLive: false, winner: 'W7M' }
            ]
        }
    ],
    transferencias: [
        { player: 'm0NESY',   role: 'AWP • RU', game: 'cs2',      from: 'G2',           fromLogo: getTeamLogo('G2'),    to: 'Falcons',     toLogo: getTeamLogo('Falcons'), status: 'Rumor',      date: '25/05/2026' },
        { player: 'aspas',    role: 'Duelista • BR', game: 'valorant', from: 'Leviatán Esports', fromLogo: getTeamLogo('Leviatán Esports'), to: 'LOUD', toLogo: getTeamLogo('LOUD'), status: 'Confirmado', date: '20/05/2026' },
        { player: 'Yatoro',   role: 'Carry • UA', game: 'dota2',  from: 'Team Spirit',  fromLogo: getTeamLogo('Team Spirit'), to: 'BetBoom', toLogo: getTeamLogo('BetBoom'), status: 'Rumor',      date: '18/05/2026' },
        { player: 'Heruz',    role: 'Entry • BR', game: 'r6',     from: 'W7M',          fromLogo: getTeamLogo('W7M'),   to: 'Team Liquid', toLogo: getTeamLogo('Team Liquid'), status: 'Confirmado', date: '15/05/2026' },
        { player: 'Trigger',  role: 'ADC • KR', game: 'lol',      from: 'paiN Gaming',  fromLogo: getTeamLogo('paiN'),  to: 'Free Agent', toLogo: '',                    status: 'Confirmado', date: '08/05/2026' },
        { player: 'Rabelo',   role: 'ADC • BR', game: 'lol',      from: 'RED Academy',  fromLogo: getTeamLogo('RED'),   to: 'paiN Gaming', toLogo: getTeamLogo('paiN'), status: 'Rumor',      date: '08/05/2026' },
        { player: 'Boal',     role: 'TOP • BR', game: 'lol',      from: 'Free Agent',   fromLogo: '',                  to: 'paiN Gaming', toLogo: getTeamLogo('paiN'), status: 'Confirmado', date: '30/04/2026' }
    ],
    votos: {
        dates: {
            '25': { isPast: true },
            '26': { isPast: true },
            '27': { isPast: false }, // Today
            '28': { isPast: false }
        },
        matches: [
            { id: 1, league: 'CBLOL Split 1', team1: 'LOUD', team2: 'LOS', score: '1 - 2', live: true, date: '27' },
            { id: 2, league: 'IEM Dallas', team1: 'NaVi', team2: 'FaZe', score: '2 - 0', live: false, date: '26' }
        ],
        players: [
            // Match 1: LOUD vs LOS (LoL - 27)
            { id: 1, matchId: 1, name: 'Robo', team: 'LOUD', rating: 0, totalVotes: 0 },
            { id: 2, matchId: 1, name: 'SuperCleber', team: 'LOS', rating: 0, totalVotes: 0 },
            { id: 3, matchId: 1, name: 'Croc', team: 'LOUD', rating: 0, totalVotes: 0 },
            { id: 4, matchId: 1, name: 'Seize', team: 'LOS', rating: 0, totalVotes: 0 },
            { id: 5, matchId: 1, name: 'tinowns', team: 'LOUD', rating: 0, totalVotes: 0 },
            { id: 6, matchId: 1, name: 'Envy', team: 'LOS', rating: 0, totalVotes: 0 },
            { id: 7, matchId: 1, name: 'Route', team: 'LOUD', rating: 0, totalVotes: 0 },
            { id: 8, matchId: 1, name: 'brTT', team: 'LOS', rating: 0, totalVotes: 0 },
            { id: 9, matchId: 1, name: 'RedBert', team: 'LOUD', rating: 0, totalVotes: 0 },
            { id: 10, matchId: 1, name: 'Kabbie', team: 'LOS', rating: 0, totalVotes: 0 },

            // Match 2: NaVi vs FaZe (CS2 - 26, isPast: true)
            { id: 11, matchId: 2, name: 'Aleksib', team: 'NaVi', rating: 4.8, totalVotes: 1254, isPast: true },
            { id: 12, matchId: 2, name: 'karrigan', team: 'FaZe', rating: 3.5, totalVotes: 980, isPast: true },
            { id: 13, matchId: 2, name: 'w0nderful', team: 'NaVi', rating: 4.9, totalVotes: 2100, isPast: true },
            { id: 14, matchId: 2, name: 'broky', team: 'FaZe', rating: 4.1, totalVotes: 1850, isPast: true },
            { id: 15, matchId: 2, name: 'b1t', team: 'NaVi', rating: 4.5, totalVotes: 1540, isPast: true },
            { id: 16, matchId: 2, name: 'ropz', team: 'FaZe', rating: 4.6, totalVotes: 1720, isPast: true },
            { id: 17, matchId: 2, name: 'jL', team: 'NaVi', rating: 5.0, totalVotes: 3200, isPast: true },
            { id: 18, matchId: 2, name: 'rain', team: 'FaZe', rating: 3.8, totalVotes: 850, isPast: true },
            { id: 19, matchId: 2, name: 'iM', team: 'NaVi', rating: 4.2, totalVotes: 1100, isPast: true },
            { id: 20, matchId: 2, name: 'frozen', team: 'FaZe', rating: 4.3, totalVotes: 1300, isPast: true }
        ]
    },
    apostas: [
        { brand: 'BetBoom', domain: 'betboom.com', rating: '4.9/5', features: ['Live streaming', '1.000 mercados'], promo: 'VIP Premier & Cashback' },
        { brand: 'Aposta Ganha', domain: 'apostaganha.bet', rating: '4.8/5', features: ['Pix imediato', 'Odds altas'], promo: 'Bônus R$200' },
        { brand: 'Superbet', domain: 'superbet.com', rating: '4.9/5', features: ['SuperOdds', 'Cashout'], promo: '100% até R$500' }
    ]
};

// Imagens de fallback
const fallbacks = [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
];

MOCK_DATA.carousel.forEach((item, index) => item.image = fallbacks[index % fallbacks.length]);
MOCK_DATA.news.forEach((item, index) => item.image = fallbacks[index % fallbacks.length]);


// ELEMENTOS DO DOM
const carouselTrack = document.querySelector('.carousel-track');
const carouselDots = document.querySelector('.carousel-dots');
const btnPrev = document.querySelector('.carousel-btn.prev');
const btnNext = document.querySelector('.carousel-btn.next');
const newsGrid = document.getElementById('news-grid');
const tabs = document.querySelectorAll('.tabs-container.filter-tabs .tab');
const gameFilters = document.querySelectorAll('.game-filter');
const searchInput = document.querySelector('.search-box input');
const pipWindow = document.getElementById('pip-window');
const pipCloseBtn = document.getElementById('pip-close');
const pipExpandBtn = document.getElementById('pip-expand');
const themeToggleBtn = document.querySelector('.theme-toggle');

// ELEMENTOS DE NAVEGAÇÃO
const navItems = document.querySelectorAll('.nav-item');
const pageViews = document.querySelectorAll('.page-view');
const breadcrumbText = document.getElementById('breadcrumb-text');
const agendaList = document.getElementById('agenda-list');
const campeonatosList = document.getElementById('campeonatos-list');
const bolaoTabsBtn = document.querySelectorAll('#bolao-tabs .tab');
const agendaTabsBtn = document.querySelectorAll('#agenda-tabs .tab');
const campeonatosTabsBtn = document.querySelectorAll('#campeonatos-tabs .tab');

// ESTADO
let currentCategory = 'todos';
let bolaoMode = 'partidas'; // 'partidas' ou 'resultados'
let agendaMode = 'partidas'; // 'partidas' ou 'resultados'
let campeonatosMode = 'Andamento';
let bolaoSelections = {}; // Armazenar escolhas do usuário
let userVotes = {}; // Armazenar votos do usuário em Votos
let currentSlide = 0;
let carouselInterval;
let filteredCarouselData = [];
let filteredNewsData = [];
const fullNewsGrid = document.getElementById('full-news-grid');
const transfersList = document.getElementById('transfers-list');
const votesList = document.getElementById('votes-list');
const bettingCardsList = document.getElementById('betting-cards-list');
const votingMatchesContainer = document.querySelector('.voting-matches-container');
const logoLink = document.getElementById('logo-link');
const bolaoList = document.getElementById('bolao-list');


// INICIALIZAR
function init() {
    filterData();
    renderCarousel();
    renderNews();
    renderAgenda();
    renderCampeonatos();
    renderFullNews();
    renderTransfers();
    renderVotes();
    renderBettingCards();
    renderBolao();
    setupEventListeners();
    startCarouselAutoPlay();
}

// LÓGICA DE NAVEGAÇÃO SPA
function navigateTo(pageId, title) {
    // Atualizar item de navegação ativo
    navItems.forEach(nav => {
        nav.classList.toggle('active', nav.dataset.page === pageId);
    });

    // Atualizar visualização da página ativa
    pageViews.forEach(page => {
        page.classList.toggle('active', page.id === `page-${pageId}`);
    });

    // Atualizar breadcrumb
    breadcrumbText.innerText = title;
}

// FILTRAGEM INÍCIO
function filterData(query = '') {
    const lowerQuery = query.toLowerCase();
    
    filteredCarouselData = MOCK_DATA.carousel.filter(item => {
        const matchCategory = currentCategory === 'todos' || item.category === currentCategory;
        const matchQuery = item.title.toLowerCase().includes(lowerQuery) || item.tag.toLowerCase().includes(lowerQuery);
        return matchCategory && matchQuery;
    });

    filteredNewsData = MOCK_DATA.news.filter(item => {
        const matchCategory = currentCategory === 'todos' || item.category === currentCategory;
        const matchQuery = item.title.toLowerCase().includes(lowerQuery) || item.tag.toLowerCase().includes(lowerQuery);
        return matchCategory && matchQuery;
    });

    // Mostrar/esconder carrossel dependendo se há slides para esta categoria
    const carouselEl = document.getElementById('main-carousel');
    if (carouselEl) {
        carouselEl.style.display = filteredCarouselData.length === 0 ? 'none' : '';
    }
}

// RENDERIZAR CARROSSEL
function renderCarousel() {
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';
    currentSlide = 0;

    const carouselEl = document.getElementById('main-carousel');
    if (filteredCarouselData.length === 0) {
        if (carouselEl) carouselEl.style.display = 'none';
        return;
    }
    if (carouselEl) carouselEl.style.display = '';

    filteredCarouselData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="carousel-overlay">
                <span class="carousel-tag">${item.tag}</span>
                <h2 class="carousel-title">${item.title}</h2>
            </div>
        `;
        carouselTrack.appendChild(slide);

        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });

    updateCarouselTransform();
}

function goToSlide(index) {
    if (filteredCarouselData.length === 0) return;
    currentSlide = (index + filteredCarouselData.length) % filteredCarouselData.length;
    updateCarouselTransform();
    resetCarouselAutoPlay();
}

function updateCarouselTransform() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startCarouselAutoPlay() {
    carouselInterval = setInterval(nextSlide, 5000);
}

function resetCarouselAutoPlay() {
    clearInterval(carouselInterval);
    startCarouselAutoPlay();
}

// RENDERIZAR NOTÍCIAS
function renderNews() {
    newsGrid.innerHTML = '';
    filteredNewsData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('news-card');
        card.innerHTML = `
            <div class="news-img"><img src="${item.image}" alt="${item.title}"></div>
            <div class="news-content">
                <div class="news-meta"><span>${item.tag}</span></div>
                <h3 class="news-title">${item.title}</h3>
            </div>
        `;
        newsGrid.appendChild(card);
    });
}

// RENDERIZAR AGENDA
function renderAgenda() {
    agendaList.innerHTML = '';
    MOCK_DATA.agenda.forEach(group => {
        const dateTitle = document.createElement('h4');
        dateTitle.classList.add('list-section-title');
        dateTitle.innerText = group.date;
        agendaList.appendChild(dateTitle);

        group.matches.forEach(match => {
            const row = document.createElement('div');
            row.classList.add('bolao-row'); // Reutilizando bolao-row para layout semelhante
            
            const rightContent = match.isLive 
                ? `<div class="status-badge live">Ao vivo</div>`
                : `<div class="time">${match.time}</div><div class="format">${match.format}</div>`;

            let t1Class = '';
            let t2Class = '';

            if (agendaMode === 'resultados') {
                if(match.winner === match.team1) t1Class = 'winner';
                else if(match.winner === match.team2) t2Class = 'winner';
            }

            row.innerHTML = `
                <div class="bolao-left">
                    <div class="league-title">
                        <img src="${match.leagueImage}" style="width:24px;">
                        <span>${match.league}</span>
                    </div>
                    <span class="game-name">${match.stage || match.game}</span>
                </div>
                <div class="bolao-center" style="pointer-events: none;"> <!-- Sem hover no center na Agenda -->
                    <div class="bolao-team-side ${t1Class}">
                        <span class="bolao-team-name">${match.team1}</span>
                        <img src="${getTeamLogo(match.team1)}" style="width:24px; border-radius:4px; object-fit:contain;">
                    </div>
                    <div class="bolao-team-side ${t2Class}">
                        <img src="${getTeamLogo(match.team2)}" style="width:24px; border-radius:4px; object-fit:contain;">
                        <span class="bolao-team-name">${match.team2}</span>
                    </div>
                </div>
                <div class="bolao-right">
                    ${rightContent}
                </div>
            `;
            agendaList.appendChild(row);
        });
    });
}

// RENDERIZAR CAMPEONATOS
function renderCampeonatos() {
    if (!campeonatosList) return;
    campeonatosList.innerHTML = '';
    
    const filtered = MOCK_DATA.campeonatos.filter(section => {
        if (campeonatosMode === 'Andamento') return section.section === 'Ao Vivo' || section.section === 'Em andamento';
        return section.section === campeonatosMode;
    });

    filtered.forEach(section => {
        const sectionTitle = document.createElement('h4');
        sectionTitle.classList.add('list-section-title');
        sectionTitle.innerText = section.section;
        campeonatosList.appendChild(sectionTitle);

        section.tournaments.forEach(tourney => {
            const row = document.createElement('div');
            row.classList.add('row-item');
            
            let rightHtml = '';
            if (section.section === 'Finalizados') {
                rightHtml = `
                    <div style="text-align:right;">
                        <span style="display:block;font-size:12px;color:var(--text-muted);">Campeão</span>
                        <div style="display:flex;align-items:center;gap:6px;justify-content:flex-end;margin-top:4px;">
                            <span style="color:#10b981;font-weight:600;font-size:14px;">${tourney.winner}</span>
                            <img src="${getTeamLogo(tourney.winner)}" style="width:20px;border-radius:4px;object-fit:contain;">
                        </div>
                    </div>
                `;
            } else {
                // Gerar mini ícones para times
                const teamIcons = tourney.teams.map(t => `<img src="${getTeamLogo(t)}" class="team-logo" title="${t}" style="object-fit:contain;">`).join('');
                rightHtml = `<div class="teams-mini-list">${teamIcons}</div>`;
            }

            row.innerHTML = `
                <div class="row-item-left">
                    <div class="league-box"><img src="${tourney.leagueImage}" style="object-fit:contain;"></div>
                    <div class="camp-info">
                        <span class="title">${tourney.league}</span>
                        <span class="subtitle">${tourney.game}</span>
                    </div>
                </div>
                <div class="row-item-right">
                    ${rightHtml}
                </div>
            `;
            campeonatosList.appendChild(row);
        });
    });
}

// RENDERIZAR BOLÃO (page-bolao)
function renderBolao() {
    if(!bolaoList) return;
    bolaoList.innerHTML = '';
    
    MOCK_DATA.bolao.forEach(group => {
        const dateTitle = document.createElement('h4');
        dateTitle.classList.add('list-section-title');
        dateTitle.innerText = group.date;
        bolaoList.appendChild(dateTitle);

        group.matches.forEach(match => {
            const row = document.createElement('div');
            row.classList.add('bolao-row');
            
            const rightContent = match.isLive 
                ? `<div class="status-badge live">Ao vivo</div>`
                : `<div class="time">${match.time}</div><div class="format">${match.format}</div>`;

            // Verifica as seleções do bolão
            let t1Class = '';
            let t2Class = '';

            if (bolaoMode === 'resultados') {
                if(match.winner === match.team1) t1Class = 'winner';
                else if(match.winner === match.team2) t2Class = 'winner';
            } else {
                if(bolaoSelections[match.id] === match.team1) t1Class = 'selected';
                if(bolaoSelections[match.id] === match.team2) t2Class = 'selected';
            }

            row.innerHTML = `
                <div class="bolao-left">
                    <div class="league-title">
                        <img src="${match.leagueImage}" style="width:32px;"> <!-- Logo aumentado -->
                        <span>${match.league}</span>
                    </div>
                    <span class="game-name">${match.game}</span>
                </div>
                <div class="bolao-center">
                    <div class="bolao-team-side ${t1Class}" data-match-id="${match.id}" data-team="${match.team1}">
                        <span class="bolao-team-name">${match.team1}</span>
                        <img src="${getTeamLogo(match.team1)}" style="width:24px; border-radius:4px; object-fit:contain;">
                    </div>
                    <div class="bolao-team-side ${t2Class}" data-match-id="${match.id}" data-team="${match.team2}">
                        <img src="${getTeamLogo(match.team2)}" style="width:24px; border-radius:4px; object-fit:contain;">
                        <span class="bolao-team-name">${match.team2}</span>
                    </div>
                </div>
                <div class="bolao-right">
                    ${rightContent}
                </div>
            `;
            bolaoList.appendChild(row);
        });
    });

    // Eventos de clique para selecionar o bolão (apenas na tab partidas)
    if (bolaoMode === 'partidas') {
        const teamSides = document.querySelectorAll('.bolao-team-side');
        teamSides.forEach(side => {
            side.addEventListener('click', (e) => {
                const matchId = side.dataset.matchId;
                const team = side.dataset.team;
                
                // Se já tá selecionado, remove. Senão, seleciona.
                if(bolaoSelections[matchId] === team) {
                    delete bolaoSelections[matchId];
                } else {
                    bolaoSelections[matchId] = team;
                }
                
                renderBolao(); // Re-renderiza pra atualizar as classes visuais
            });
        });
    }
}

// RENDERIZAR TODAS AS NOTÍCIAS (page-noticias)
function renderFullNews() {
    if(!fullNewsGrid) return;
    fullNewsGrid.innerHTML = '';
    // Duplicar notícias para simular um feed maior
    const extendedNews = [...MOCK_DATA.news, ...MOCK_DATA.news];
    extendedNews.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('news-card');
        card.innerHTML = `
            <div class="news-img"><img src="${item.image}" alt="${item.title}"></div>
            <div class="news-content">
                <div class="news-meta"><span>${item.tag}</span></div>
                <h3 class="news-title">${item.title}</h3>
            </div>
        `;
        fullNewsGrid.appendChild(card);
    });
}

// RENDERIZAR TRANSFERÊNCIAS (page-transferencias)
function renderTransfers() {
    if(!transfersList) return;
    transfersList.innerHTML = '';
    MOCK_DATA.transferencias.forEach(t => {
        const tr = document.createElement('tr');
        const statusClass = 'status-' + t.status.toLowerCase().replace(' ', '-');

        // Ícone do jogo para as colunas 'de' e 'para'
        const gameIcon = t.game === 'valorant'
            ? `<img src="https://icon.horse/icon/playvalorant.com" style="width:14px;vertical-align:middle;margin-right:4px;">`
            : `<img src="https://icon.horse/icon/leagueoflegends.com" style="width:14px;vertical-align:middle;margin-right:4px;">`;

        const fromLogoHtml = t.fromLogo
            ? `<img src="${t.fromLogo}" style="width:20px;height:20px;object-fit:contain;margin-right:4px;border-radius:3px;" onerror="this.style.display='none'">`
            : '';

        const toLogoHtml = t.toLogo
            ? `<img src="${t.toLogo}" style="width:20px;height:20px;object-fit:contain;margin-right:4px;border-radius:3px;" onerror="this.style.display='none'">`
            : '';

        tr.innerHTML = `
            <td>
                <div class="player-cell">
                    <img 
                        src="${getPlayerPhoto(t.player)}" 
                        class="player-avatar"
                        onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(t.player)}&background=1e293b&color=10b981&rounded=true&bold=true&size=64'"
                    >
                    <div class="player-info">
                        <span class="player-name">${t.player}</span>
                        <span class="player-role">${t.role}</span>
                    </div>
                </div>
            </td>
            <td><div class="team-cell">${gameIcon}${fromLogoHtml}${t.from}</div></td>
            <td><div class="team-cell">${gameIcon}${toLogoHtml}${t.to}</div></td>
            <td><span class="status-badge-td ${statusClass}">${t.status}</span></td>
            <td><span style="color:var(--text-muted); font-size:12px;"><i class="ph ph-calendar-blank"></i> ${t.date}</span></td>
            <td><span class="btn-read"><i class="ph ph-arrow-square-out"></i> Leia</span></td>
        `;
        transfersList.appendChild(tr);
    });
}

// RENDERIZAR VOTOS (page-votos)
function renderVotes() {
    if(!votingMatchesContainer || !votesList) return;
    
    // Pegar a data ativa
    const activeDateBox = document.querySelector('.day-box.active');
    const currentDate = activeDateBox ? activeDateBox.querySelector('strong').innerText : '27';
    const dateConfig = MOCK_DATA.votos.dates[currentDate] || { isPast: false };
    
    const matchesForDate = MOCK_DATA.votos.matches.filter(m => m.date === currentDate);
    const playersForDate = MOCK_DATA.votos.players.filter(p => matchesForDate.some(m => m.id === p.matchId));
    
    // Renderizar Bloco de Partidas
    votingMatchesContainer.innerHTML = '';
    if (matchesForDate.length === 0) {
        votingMatchesContainer.innerHTML = '<p style="color:var(--text-muted);padding:16px;">Nenhuma partida disponível para esta data.</p>';
    }
    
    matchesForDate.forEach((m, idx) => {
        const matchDiv = document.createElement('div');
        matchDiv.className = `row-item voting-match ${idx === 0 ? 'active' : ''}`;
        matchDiv.innerHTML = `
            <div class="row-item-left">
                <div class="match-info">
                    <span class="title" style="font-size:12px;">${m.league}</span>
                </div>
            </div>
            <div class="row-item-center">
                <div class="team-vs" style="font-size:12px;">
                    <span>${m.team1}</span>
                    <img src="${getTeamLogo(m.team1)}" class="team-logo" style="width:16px;object-fit:contain;">
                </div>
                <span class="score-box" style="background:transparent;">${m.score}</span>
                <div class="team-vs" style="font-size:12px;">
                    <img src="${getTeamLogo(m.team2)}" class="team-logo" style="width:16px;object-fit:contain;">
                    <span>${m.team2}</span>
                </div>
            </div>
            <div class="row-item-right">
                ${m.live ? '<div class="status-badge live">Ao vivo</div>' : (dateConfig.isPast ? '<div class="status-badge">Encerrado</div>' : '<div class="time">18:00</div>')}
            </div>
        `;
        votingMatchesContainer.appendChild(matchDiv);
    });

    // Renderizar Jogadores
    votesList.innerHTML = '';
    
    if (playersForDate.length === 0) {
        votesList.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">Sem jogadores para listar.</p>';
        return;
    }

    // Agrupar players pelo matchId
    const playersByMatch = {};
    playersForDate.forEach(p => {
        if(!playersByMatch[p.matchId]) playersByMatch[p.matchId] = [];
        playersByMatch[p.matchId].push(p);
    });
    
    Object.keys(playersByMatch).forEach(matchId => {
        const players = playersByMatch[matchId];
        // Exibir em pares ou como uma lista
        for (let i = 0; i < players.length; i += 2) {
            const p1 = players[i];
            const p2 = players[i+1];
            if (!p2) break; // layout em pares simplificado

            const row = document.createElement('div');
            row.className = 'vote-player-row';
            
            // Lógica de Votação por Estrelas com hover interativo
            const STAR_LABELS = ['', '1', '2', '3', '4', '5'];
            const renderStars = (player) => {
                const userRating = userVotes[player.id] || 0;
                const isReadOnly = dateConfig.isPast;
                const displayRating = isReadOnly ? Math.round(player.rating) : userRating;
                const labelText = isReadOnly
                    ? (player.rating > 0 ? STAR_LABELS[Math.round(player.rating)] || '' : '')
                    : (userRating > 0 ? STAR_LABELS[userRating] : 'Clique para votar');

                let starsHtml = '';
                for(let star=1; star<=5; star++) {
                    const isActive = star <= displayRating;
                    const colorStyle = isActive ? 'color:#9333ea;' : 'color:#3f3f46;';
                    const cursorStyle = isReadOnly ? 'cursor:default;' : 'cursor:pointer;';
                    const scaleStyle = isActive ? 'transform:scale(1.15);' : '';
                    starsHtml += `<i class="ph-fill ph-star star-btn" style="${cursorStyle}${colorStyle}${scaleStyle} font-size:18px; transition:all 0.15s ease; display:inline-block;" data-pid="${player.id}" data-val="${star}" data-readonly="${isReadOnly}"></i>`;
                }

                return `
                    <div class="star-group" data-pid="${player.id}" style="display:flex;flex-direction:column;align-items:center;gap:4px;">
                        <div style="display:flex;gap:3px;">${starsHtml}</div>
                        <span class="star-label" data-pid="${player.id}" style="font-size:10px; color:${userRating>0||isReadOnly?'#9333ea':'#71717a'}; min-height:14px; transition:all 0.15s;">${labelText}</span>
                    </div>
                `;
            };

            const ratingInfo1 = dateConfig.isPast ? `<span class="score-box" style="margin-top:4px;">${p1.rating.toFixed(1)}</span><br><span style="font-size:10px;color:gray;">${p1.totalVotes} votos</span>` : '';
            const ratingInfo2 = dateConfig.isPast ? `<span class="score-box" style="margin-top:4px;">${p2.rating.toFixed(1)}</span><br><span style="font-size:10px;color:gray;">${p2.totalVotes} votos</span>` : '';

            row.innerHTML = `
                <div class="vote-side" style="cursor:default;">
                    <img src="${getPlayerPhoto(p1.name)}" class="player-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${p1.name}&background=random'">
                    <div style="display:flex;flex-direction:column;align-items:flex-start;">
                        <span class="player-name">${p1.name}</span>
                        <div class="star-rating-container">
                            ${renderStars(p1)}
                        </div>
                    </div>
                    ${ratingInfo1}
                </div>
                <span class="vs-text">vs</span>
                <div class="vote-side right" style="cursor:default;">
                    ${ratingInfo2}
                    <div style="display:flex;flex-direction:column;align-items:flex-end;">
                        <span class="player-name">${p2.name}</span>
                        <div class="star-rating-container">
                            ${renderStars(p2)}
                        </div>
                    </div>
                    <img src="${getPlayerPhoto(p2.name)}" class="player-avatar" onerror="this.src='https://ui-avatars.com/api/?name=${p2.name}&background=random'">
                </div>
            `;
            votesList.appendChild(row);
        }
    });

    // Event listeners para estrelas — hover + click interativos
    const STAR_LABELS = ['', '1', '2', '3', '4', '5'];
    document.querySelectorAll('.star-btn').forEach(btn => {
        const isReadOnly = btn.dataset.readonly === 'true';
        if (isReadOnly) return;

        const pid = btn.dataset.pid;

        // Hover: ilumina estrelas até o hover
        btn.addEventListener('mouseenter', () => {
            const hoverVal = parseInt(btn.dataset.val);
            const group = document.querySelector(`.star-group[data-pid="${pid}"]`);
            const label = document.querySelector(`.star-label[data-pid="${pid}"]`);
            if (label) { label.textContent = STAR_LABELS[hoverVal]; label.style.color = '#9333ea'; }
            group.querySelectorAll('.star-btn').forEach(s => {
                const sv = parseInt(s.dataset.val);
                s.style.color = sv <= hoverVal ? '#c084fc' : '#3f3f46';
                s.style.transform = sv <= hoverVal ? 'scale(1.25)' : 'scale(1)';
            });
        });

        // Mouse leave: volta ao estado original
        btn.addEventListener('mouseleave', () => {
            const currentRating = userVotes[pid] || 0;
            const group = document.querySelector(`.star-group[data-pid="${pid}"]`);
            const label = document.querySelector(`.star-label[data-pid="${pid}"]`);
            if (label) {
                label.textContent = currentRating > 0 ? STAR_LABELS[currentRating] : 'Clique para votar';
                label.style.color = currentRating > 0 ? '#9333ea' : '#71717a';
            }
            group.querySelectorAll('.star-btn').forEach(s => {
                const sv = parseInt(s.dataset.val);
                s.style.color = sv <= currentRating ? '#9333ea' : '#3f3f46';
                s.style.transform = sv <= currentRating ? 'scale(1.15)' : 'scale(1)';
            });
        });

        // Click: confirma o voto
        btn.addEventListener('click', () => {
            const val = parseInt(btn.dataset.val);
            userVotes[pid] = val;
            // Feedback visual imediato sem re-renderizar tudo
            const group = document.querySelector(`.star-group[data-pid="${pid}"]`);
            const label = document.querySelector(`.star-label[data-pid="${pid}"]`);
            if (label) { label.textContent = STAR_LABELS[val]; label.style.color = '#9333ea'; }
            group.querySelectorAll('.star-btn').forEach(s => {
                const sv = parseInt(s.dataset.val);
                s.style.color = sv <= val ? '#9333ea' : '#3f3f46';
                s.style.transform = sv <= val ? 'scale(1.15)' : 'scale(1)';
                s.dataset.readonly = 'false'; // mantém interativo
            });
        });
    });
}

// Função: renderBettingCards
function renderBettingCards() {
    const bettingCardsList = document.getElementById('betting-cards-list');
    if (!bettingCardsList) return;
    
    bettingCardsList.innerHTML = '';
    MOCK_DATA.apostas.forEach(b => {
        const card = document.createElement('div');
        card.className = 'bet-card-list-item';
        card.innerHTML = `
            <div class="bet-card-brand">
                <img src="https://icon.horse/icon/${b.domain}" style="width: 48px; height: 48px; object-fit: contain; border-radius: 8px;">
                <div style="font-size:12px;"><span style="color:#22c55e;">RECOMMENDED</span><br>⭐ ${b.rating}</div>
            </div>
            <div class="bet-card-features">
                <strong>${b.brand} é confiável?</strong>
                <ul>
                    ${b.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="bet-card-promo">
                <small>PROMOÇÃO ${b.brand.toUpperCase()}</small>
                <strong>${b.promo}</strong>
            </div>
            <div class="bet-card-action">
                <div style="border:1px dashed var(--text-muted); padding:4px 8px; text-align:center; border-radius:4px; font-size:12px; letter-spacing:2px;">******</div>
                <button class="btn-primary">Ir para o site</button>
            </div>
        `;
        bettingCardsList.appendChild(card);
    });
}

// OUVINTES DE EVENTOS (EVENT LISTENERS)
function setupEventListeners() {
    // Alternar Barra Lateral
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Logo Clicável
    if(logoLink) {
        logoLink.addEventListener('click', () => {
            navigateTo('inicio', 'Início');
        });
    }

    // Navegação SPA
    navItems.forEach(nav => {
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = nav.dataset.page;
            if(!pageId) return; // Se for um link sem página
            
            const title = nav.innerText.trim();
            navigateTo(pageId, title);
        });
    });

    // Filtros (Início)
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            filterData(searchInput.value);
            renderCarousel();
            renderNews();
        });
    });

    // Filtros de Jogo da Barra Lateral
    if (gameFilters) {
        gameFilters.forEach(filter => {
            filter.addEventListener('click', (e) => {
                e.preventDefault();
                // 1. Navegar para Início
                navigateTo('inicio', 'Início');
                
                // 2. Atualizar categoria
                const category = filter.dataset.category;
                currentCategory = category;
                
                // 3. Atualizar abas visualmente
                tabs.forEach(t => {
                    t.classList.toggle('active', t.dataset.category === category);
                });
                
                // 4. Renderizar
                filterData(searchInput.value);
                renderCarousel();
                renderNews();
            });
        });
    }

    // Abas do Bolão
    bolaoTabsBtn.forEach(tab => {
        tab.addEventListener('click', () => {
            bolaoTabsBtn.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            bolaoMode = tab.dataset.tab;
            renderBolao();
        });
    });

    // Abas da Agenda
    agendaTabsBtn.forEach(tab => {
        tab.addEventListener('click', () => {
            agendaTabsBtn.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            agendaMode = tab.dataset.tab;
            renderAgenda();
        });
    });

    // Abas dos Campeonatos
    if (campeonatosTabsBtn) {
        campeonatosTabsBtn.forEach(tab => {
            tab.addEventListener('click', () => {
                campeonatosTabsBtn.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                campeonatosMode = tab.dataset.tab;
                renderCampeonatos();
            });
        });
    }

    // Seleção de Data de Votos
    document.querySelectorAll('.day-box').forEach(box => {
        box.addEventListener('click', () => {
            document.querySelectorAll('.day-box').forEach(b => b.classList.remove('active'));
            box.classList.add('active');
            renderVotes();
        });
    });


    searchInput.addEventListener('input', (e) => {
        filterData(e.target.value);
        renderCarousel();
        renderNews();
    });

    // Botões do Carrossel
    btnNext.addEventListener('click', () => { nextSlide(); resetCarouselAutoPlay(); });
    btnPrev.addEventListener('click', () => { prevSlide(); resetCarouselAutoPlay(); });

    // Janela PIP
    pipCloseBtn.addEventListener('click', () => pipWindow.classList.add('closed'));
    pipExpandBtn.addEventListener('click', () => alert('Expandir stream'));

    // Alternar Tema
    let isDark = true;
    themeToggleBtn.addEventListener('click', () => {
        isDark = !isDark;
        if(isDark) {
            document.documentElement.style.setProperty('--bg-main', '#0a0a0a');
            document.documentElement.style.setProperty('--bg-sidebar', '#121212');
            document.documentElement.style.setProperty('--bg-card', '#18181b');
            document.documentElement.style.setProperty('--bg-card-hover', '#27272a');
            document.documentElement.style.setProperty('--text-primary', '#f4f4f5');
            themeToggleBtn.innerHTML = '<i class="ph ph-moon"></i>';
        } else {
            document.documentElement.style.setProperty('--bg-main', '#f4f4f5');
            document.documentElement.style.setProperty('--bg-sidebar', '#ffffff');
            document.documentElement.style.setProperty('--bg-card', '#ffffff');
            document.documentElement.style.setProperty('--bg-card-hover', '#f1f5f9');
            document.documentElement.style.setProperty('--text-primary', '#18181b');
            themeToggleBtn.innerHTML = '<i class="ph ph-sun"></i>';
        }
    });
}

// Iniciar app
init();