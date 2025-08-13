package project.sekai.coedit.handler;

import jakarta.annotation.Nonnull;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class DocWebSocketHandler extends TextWebSocketHandler {
    private static final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();

    @Override
    public void afterConnectionEstablished(@Nonnull WebSocketSession session) {
        sessions.put(session.getId(), session);
    }

    @Override
    public void handleTextMessage(@Nonnull WebSocketSession session, @Nonnull TextMessage message) {

    }

    @Override
    public void afterConnectionClosed(@Nonnull WebSocketSession session, @Nonnull CloseStatus status) throws IOException {
        sessions.remove(session.getId()).close();
    }
}
